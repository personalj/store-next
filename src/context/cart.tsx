'use client';

import { createContext, useState, useEffect, useMemo } from 'react';
import { isBrowser } from '@/utils/checkBrowser';
import { getStorageValue, setToLocalStorage } from '@/utils/localStorage';
import { CART_STORAGE_KEY } from '@/consts';
import { Product } from '@/services/products/types';

export type CartType = {
  cartItems: Product[];
  totalPrice: number;
  totalQuantity: number;
  addToCart: (item: Product) => void;
  deleteFromCart: (cartItemId: number) => void;
  clearCart: () => void;
  incrementCartItem: (cartItemId: number) => void;
  decrementCartItem: (cartItemId: number) => void;
};

const defaultCartValue: CartType = {
  cartItems: [],
  totalPrice: 0,
  totalQuantity: 0,
  addToCart: (item) => {},
  deleteFromCart: (cartItemId) => {},
  clearCart: () => {},
  incrementCartItem: (cartItemId) => {},
  decrementCartItem: (cartItemId) => {},
};

export const CartContext = createContext<CartType>(defaultCartValue);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>(
    isBrowser ? getStorageValue(CART_STORAGE_KEY, []) : []
  );

  const addToCart = (item: Product) => {
    const isItemInCart = cartItems?.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const deleteFromCart = (cartItemId: number) => {
    setCartItems(cartItems?.filter((cartItem) => cartItem.id !== cartItemId));
  };

  const incrementCartItem = (cartItemId: number) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === cartItemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCartItems(updatedCartItems);
  };

  const decrementCartItem = (cartItemId: number) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === cartItemId) {
        if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });

    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalQuantity = useMemo(() => {
    return cartItems?.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  const totalPrice = useMemo(() => {
    return cartItems?.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  useEffect(() => {
    setToLocalStorage(CART_STORAGE_KEY, cartItems);
  }, [cartItems]);

  useEffect(() => {
    const cartItems = getStorageValue(CART_STORAGE_KEY, []);
    if (cartItems) {
      setCartItems(cartItems);
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalQuantity,
        totalPrice,
        addToCart,
        deleteFromCart,
        clearCart,
        incrementCartItem,
        decrementCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

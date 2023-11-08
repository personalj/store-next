'use client';

import { useContext } from 'react';
import Link from 'next/link';
import CartItem from '@/components/cart/cartItem';
import Button from '@/components/ui/button/button';
import classes from './cart.module.scss';

import { CartContext } from '@/context/cart';
import { CartType } from '@/context/cart';

import { Product } from '@/services/products/types';

const CartInfo = () => {
  const {
    cartItems,
    totalPrice,
    clearCart,
    deleteFromCart,
    incrementCartItem,
    decrementCartItem,
  } = useContext<CartType>(CartContext);

  return (
    <>
      {!cartItems?.length ? (
        <div>
          Add
          <Link href={'/products'}>
            <span className={classes.featured}>Products</span>
          </Link>
          to cart
        </div>
      ) : (
        <>
          <div className={classes.cart__clear}>
            <Button onClick={() => clearCart()}>Clear cart</Button>
          </div>
          <ul>
            {cartItems?.map((item: Product) => (
              <li key={item.id}>
                <CartItem
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  quantity={item.quantity}
                  onDelete={() => deleteFromCart(item.id)}
                  onIncrement={() => incrementCartItem(item.id)}
                  onDecrement={() => decrementCartItem(item.id)}
                />
              </li>
            ))}
          </ul>
          <div className={classes.cart__total}>
            Total: <span>{parseFloat(totalPrice?.toFixed(2))}$</span>
          </div>
        </>
      )}
    </>
  );
};

export default CartInfo;

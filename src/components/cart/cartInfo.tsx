'use client';

import Link from 'next/link';
import CartItem from '@/components/cart/cartItem';
import Button from '@/components/ui/button/button';
import classes from './cart.module.scss';

import { useAppSelector, useAppDispatch } from '@/hooks/useRedux';
import {
  clearCartList,
  decrementCartItem,
  deleteFromCart,
  incrementCartItem,
} from '@/store/cart/cartSlice';
import { getCartProducts } from '@/store/cart/selectors';
import { useCartTotalQuantity } from '@/hooks/useGetCartTotal';

const CartInfo = () => {
  const cartList = useAppSelector(getCartProducts);
  const dispatch = useAppDispatch();
  const { roundedTotalPrice } = useCartTotalQuantity(cartList);

  return (
    <>
      {!cartList?.length ? (
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
            <Button onClick={() => dispatch(clearCartList())}>
              Clear cart
            </Button>
          </div>
          <ul>
            {cartList?.map((item) => (
              <li key={item.id}>
                <CartItem
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  quantity={item.quantity}
                  onDelete={() => dispatch(deleteFromCart(item.id))}
                  onIncrement={() => dispatch(incrementCartItem(item.id))}
                  onDecrement={() => dispatch(decrementCartItem(item.id))}
                />
              </li>
            ))}
          </ul>
          <div className={classes.cart__total}>
            Total: <span>{roundedTotalPrice}$</span>
          </div>
        </>
      )}
    </>
  );
};

export default CartInfo;

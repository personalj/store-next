'use client';
import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bagIcon from '../../../public/images/bag.svg';
import { CartContext, CartType } from '@/context/cart';
import classes from '@/components/header/headerCart.module.scss';

const HeaderCart = () => {
  const { totalQuantity } = useContext<CartType>(CartContext);

  return (
    <Link href='/cart' className={classes.cart}>
      <Image priority src={bagIcon} alt='cart icon' />
      <span className={classes.cartAmount}>{totalQuantity}</span>
    </Link>
  );
};

export default HeaderCart;

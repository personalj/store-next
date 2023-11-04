'use client';

import Image from 'next/image';
import Link from 'next/link';
import bagIcon from '../../../public/images/bag.svg';
import { useAppSelector } from '@/hooks/useRedux';
import { useCartTotalQuantity } from '@/hooks/useGetCartTotal';
import classes from '@/components/header/headerCart.module.scss';

const HeaderCart = () => {
  const { cartList } = useAppSelector((state) => state.cart);
  const { totalQuantity } = useCartTotalQuantity(cartList);

  return (
    <Link href='/cart' className={classes.cart}>
      <Image priority src={bagIcon} alt='cart icon' />
      <span className={classes.cartAmount}>{totalQuantity}</span>
    </Link>
  );
};

export default HeaderCart;

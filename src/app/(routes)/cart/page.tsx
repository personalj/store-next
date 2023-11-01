import dynamic from 'next/dynamic';
import { Metadata } from 'next';
const CartInfo = dynamic(() => import('@/components/cart/cartInfo'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Cart page',
  description: 'Cart page description',
};

const Cart = () => {
  return <CartInfo />;
};

export default Cart;

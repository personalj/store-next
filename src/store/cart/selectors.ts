import { RootState } from '@/store/intex';

export const getCartProducts = (state: RootState) => state.cart.cartList;

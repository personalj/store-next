import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/services/products/types';
import Button from '@/components/ui/button/button';
import classes from './productItem.module.scss';
import { setToCart } from '@/store/cart/cartSlice';
import { useAppDispatch } from '@/hooks/useRedux';

interface ChildProps {
  product: Product;
}
const ProductItem: FC<ChildProps> = (props) => {
  const { id, title, price, image } = props.product;
  const dispatch = useAppDispatch();

  return (
    <div className={classes.product}>
      <Link href={`/product/${id}`} className={classes.product__image}>
        {image ? (
          <Image priority width={400} height={400} src={image} alt={title} />
        ) : (
          <div>Image not found </div>
        )}
      </Link>
      <Link href={`/product/${id}`} className={classes.product__title}>
        {title}
      </Link>
      <div className={classes.product__price}>{price} $</div>
      <div className={classes.product__btn}>
        <Button
          onClick={() => dispatch(setToCart({ ...props.product, quantity: 1 }))}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;

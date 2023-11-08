'use client';

import { FC, useContext } from 'react';
import Image from 'next/image';
import { Product } from '@/services/products/types';
import Button from '@/components/ui/button/button';
import classes from './productInfo.module.scss';
import { CartContext } from '@/context/cart';
import { CartType } from '@/context/cart';

interface ChildProps {
  product: Product;
}

const ProductInfo: FC<ChildProps> = ({ product }) => {
  const { addToCart } = useContext<CartType>(CartContext);

  return (
    <div className={classes.product}>
      <div className={classes.product__info}>
        <div className={classes.product__left}>
          <div className={classes.product__img}>
            {product.image ? (
              <Image
                priority
                width={500}
                height={500}
                src={product.image}
                alt={product.title}
              />
            ) : (
              <div>Image not found </div>
            )}
          </div>
        </div>
        <div className={classes.product__right}>
          <h1 className={classes.product__title}>{product.title}</h1>
          <div className={classes.product__price}>{product.price} $</div>
          <p className={classes.product__description}>{product.description}</p>
          <Button onClick={() => addToCart({ ...product, quantity: 1 })}>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

'use client';

import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProduct } from '@/services/products/products';
import Loader from '@/components/loader/loader';
import ProductInfo from '@/components/products/productInfo';

interface ChildProps {
  id: string;
}
const HydratedProductDetails: FC<ChildProps> = ({ id }) => {
  const {
    data: product,
    isFetching,
    error,
  } = useQuery({
    queryKey: ['productInfo', id],
    queryFn: () => getProduct(id),
  });

  if (isFetching) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (error instanceof Error)
    return <div className='error'>{error?.message}</div>;

  return product ? (
    <ProductInfo product={product} />
  ) : (
    <h1>Product not found</h1>
  );
};

export default HydratedProductDetails;

'use client';

import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/services/products/products';
import Loader from '@/components/loader/loader';
import ProductList from '@/components/products/productList';
import { useRouter } from 'next/navigation';

interface ChildProps {
  activeCategory?: string;
}

const HydratedProducts: FC<ChildProps> = (props, { activeCategory }) => {
  const router = useRouter();
  const {
    data: products,
    isFetching,
    error,
  } = useQuery({
    queryKey: ['productsList', props.activeCategory],
    queryFn: () => getProducts(props.activeCategory),
    enabled: false,
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

  return products && <ProductList products={products} />;
};

export default HydratedProducts;

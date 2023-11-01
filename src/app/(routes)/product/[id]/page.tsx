import { dehydrate } from '@tanstack/query-core';
import { FC } from 'react';
import type { Metadata } from 'next';
import { getProduct } from '@/services/products/products';
import getQueryClient from '@/utils/getQueryClient';
import Hydrate from '@/utils/hydrate.client';
import HydratedProductDetails from '@/components/products/hydratedProductDetails';

interface Props {
  params: {
    id: string;
  };
}

export const metadata: Metadata = {
  title: 'Product page',
  description: 'Product page description',
};
const ProductDetails: FC<Props> = async (props) => {
  const { id } = props.params;
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['productInfo', id], () => getProduct(id));
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <HydratedProductDetails id={id} />
    </Hydrate>
  );
};

export default ProductDetails;

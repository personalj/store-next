import { FC } from 'react';
import type { Metadata } from 'next';
import { getProduct } from '@/services/products/products';
import ProductInfo from '@/components/products/productInfo';

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
  const product = await getProduct(id);

  return <ProductInfo product={product} />;
};

export default ProductDetails;

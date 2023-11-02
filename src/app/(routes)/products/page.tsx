import { dehydrate } from '@tanstack/query-core';
import getQueryClient from '@/utils/getQueryClient';
import Hydrate from '@/utils/hydrate.client';
import { FC } from 'react';
import type { Metadata } from 'next';
import { getCategories } from '@/services/categories/categories';
import { getProducts } from '@/services/products/products';
import HydratedCategories from '@/components/categories/hydratedCategories';
import HydratedProducts from '@/components/products/hydratedProducts';
import classes from './products.module.scss';

interface Props {
  searchParams?: {
    category?: string;
  };
}

export const metadata: Metadata = {
  title: 'Products page',
  description: 'Products page description',
};

const Products: FC<Props> = async (props, context) => {
  const activeCategory: string | undefined = props.searchParams?.category;
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['categories'], getCategories);
  await queryClient.prefetchQuery(['productsList', activeCategory], () =>
    getProducts(activeCategory)
  );

  const dehydratedState = dehydrate(queryClient);

  return (
    <div className={classes.info}>
      <Hydrate state={dehydratedState}>
        <aside className={classes.info__aside}>
          <HydratedCategories activeCategory={activeCategory} />
        </aside>
        <div className={classes.info__main}>
          <HydratedProducts activeCategory={activeCategory} />
        </div>
      </Hydrate>
    </div>
  );
};

export default Products;

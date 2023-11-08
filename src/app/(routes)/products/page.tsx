import { FC } from 'react';
import type { Metadata } from 'next';
import { getCategories } from '@/services/categories/categories';
import { getProducts } from '@/services/products/products';
import Categories from '@/components/categories/categories';
import ProductsList from '@/components/products/productList';
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

const Products: FC<Props> = async (props) => {
  const activeCategory: string | undefined = props.searchParams?.category;
  const categories: string[] = await getCategories();
  const products = await getProducts(activeCategory);

  return (
    <div className={classes.info}>
      <aside className={classes.info__aside}>
        <Categories activeCategory={activeCategory} categories={categories} />
      </aside>
      <div className={classes.info__main}>
        <ProductsList products={products} />
      </div>
    </div>
  );
};

export default Products;

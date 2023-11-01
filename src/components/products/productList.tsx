import { FC, useState } from 'react';
import ProductItem from './productItem';
import { Product } from '@/services/products/types';
import classes from './productList.module.scss';

interface Columns {
  cols: string;
  value: string;
}

interface ChildProps {
  products: Product[];
}
const ProductList: FC<ChildProps> = ({ products }) => {
  const columns: Columns[] = [
    { cols: '|', value: '' },
    { cols: '||', value: 'cols-2x' },
    { cols: '||||', value: 'cols-4x' },
  ];
  const [listColumns, setListColumns] = useState<string>('cols-4x');

  return (
    <>
      <ul className={classes.columns}>
        {columns?.map((column) => (
          <li
            key={column.cols}
            className={`${classes.columns__item} ${
              listColumns === column.value ? classes.columns__item_active : ''
            }`}
            onClick={() => setListColumns(column.value)}
          >
            {column.cols}
          </li>
        ))}
      </ul>
      <ul className={classes.products}>
        {products &&
          products?.map((product: Product) => (
            <li
              key={product.id}
              className={`${classes.products__item} ${classes[listColumns]}`}
            >
              <ProductItem product={product} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default ProductList;

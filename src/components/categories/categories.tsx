'use client';

import { FC } from 'react';
import classes from './categoriesList.module.scss';
import { useRouter, useSearchParams } from 'next/navigation';

interface ChildProps {
  activeCategory?: string;
  categories: string[];
}
const Categories: FC<ChildProps> = ({ activeCategory, categories }) => {
  const params = useSearchParams();
  const router = useRouter();

  const newParams = new URLSearchParams(params.toString());

  const handleCategoryClick = (val: string) => {
    if (val !== activeCategory) {
      newParams.set('category', val);
    } else {
      newParams.delete('category');
    }
    router.push(`/products?${newParams.toString()}`);
  };

  return (
    <ul className={classes.list}>
      {categories &&
        categories?.map((item, index) => (
          <li key={index} className={classes.list__item}>
            <span
              className={`${classes.list__el} ${
                activeCategory === item ? classes.list__el_active : ''
              }`}
              onClick={() => handleCategoryClick(item)}
            >
              {item}
            </span>
          </li>
        ))}
    </ul>
  );
};

export default Categories;

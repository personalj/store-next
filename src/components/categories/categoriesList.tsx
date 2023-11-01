import { FC } from 'react';
import classes from './categoriesList.module.scss';

interface ChildProps {
  activeCategory?: string;
  categories: string[];
  handleCategoryClick: (item: string) => void;
}
const CategoriesList: FC<ChildProps> = ({
  activeCategory,
  categories,
  handleCategoryClick,
}) => {
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

export default CategoriesList;

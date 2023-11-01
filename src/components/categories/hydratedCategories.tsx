'use client';

import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import { getCategories } from '@/services/categories/categories';
import CategoriesList from '@/components/categories/categoriesList';
import Loader from '@/components/loader/loader';
interface ChildProps {
  activeCategory?: string;
}
const HydratedCategories: FC<ChildProps> = ({ activeCategory }) => {
  const {
    data: categories,
    isFetching,
    error,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

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

  if (isFetching) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (error instanceof Error)
    return <div className='error'>{error?.message}</div>;

  return (
    categories && (
      <CategoriesList
        activeCategory={activeCategory}
        categories={categories}
        handleCategoryClick={handleCategoryClick}
      />
    )
  );
};

export default HydratedCategories;

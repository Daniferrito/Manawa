import React from 'react';
import Category from '../../types/Category';
import CategoriesListItem from './CategoriesListItem';

interface CategoriesListProps {
  categories: Category[];
}

const CategoriesList = ({ categories }: CategoriesListProps) => {
  return (
    <div>
      {categories.map(category => (
        <CategoriesListItem key={category.title} category={category} />
      ))}
    </div>
  );
};

export default CategoriesList;

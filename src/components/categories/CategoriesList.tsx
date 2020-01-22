import React from 'react';
import Category from '../../types/Category';
import CategoriesListItem from './CategoriesListItem';

import ExampleData from '../../dummies/ExampleData.json';
import MainData from '../../types/MainData';

interface Props {
  categories?: Category[];
}

const CategoriesList = (props: Props) => {
  const { categories = MainData.fromJson(ExampleData).categories } = props;

  // if (categories === undefined) return <>{'Error'}</>;

  return (
    <>
      {categories.map(category => (
        <CategoriesListItem key={category.title} category={category} />
      ))}
    </>
  );
};

export default CategoriesList;

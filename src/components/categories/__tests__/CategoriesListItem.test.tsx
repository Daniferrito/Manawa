import React from 'react';
import { shallow } from 'enzyme';
import CategoriesListItem from '../CategoriesListItem';

import ExampleData from '../../../dummies/ExampleData.json';
import MainData from '../../../types/MainData';

test('renders without crashing', () => {
  const categoriesList = shallow(
    <CategoriesListItem category={MainData.fromJson(ExampleData).categories[0]} />
  );
  expect(categoriesList).toMatchSnapshot();
});
test('renders without crashing2', () => {
  const categoriesList = shallow(<CategoriesListItem />);
  expect(categoriesList).toMatchSnapshot();
});

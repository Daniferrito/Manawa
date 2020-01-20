import React from 'react';
import { shallow } from 'enzyme';
import CategoriesList from '../CategoriesList';

import ExampleData from '../../../dummies/ExampleData.json';
import MainData from '../../../types/MainData';

test('renders without crashing', () => {
  const categoriesList = shallow(
    <CategoriesList categories={MainData.fromJson(ExampleData).categories} />
  );
  expect(categoriesList).toMatchSnapshot();
});
test('renders without crashing2', () => {
  const categoriesList = shallow(<CategoriesList />);
  expect(categoriesList).toMatchSnapshot();
});

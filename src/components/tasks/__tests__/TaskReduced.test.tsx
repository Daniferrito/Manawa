import React from 'react';
import { shallow } from 'enzyme';
import TaskReduced from '../TaskReduced';

import ExampleData from '../../../dummies/ExampleData.json';
import MainData from '../../../types/MainData';

test('renders without crashing', () => {
  const categoriesList = shallow(
    <TaskReduced task={MainData.fromJson(ExampleData).categories[0].tasks[0]} />
  );
  expect(categoriesList).toMatchSnapshot();
});
test('renders without crashing2', () => {
  const categoriesList = shallow(<TaskReduced />);
  expect(categoriesList).toMatchSnapshot();
});

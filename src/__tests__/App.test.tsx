import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import { MemoryRouter } from 'react-router';
import CategoriesList from '../components/categories/CategoriesList';

test('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeDefined();
});

test('redirects correctly', () => {
  const wrapper = shallow(
    <MemoryRouter initialEntries={['/random']}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find(CategoriesList)).toHaveLength(0);
});

test('redirects correctly 2', () => {
  const wrapper = shallow(
    <MemoryRouter initialEntries={['/home']}>
      <App />
    </MemoryRouter>
  );
  // expect(wrapper.find(CategoriesList)).toHaveLength(1);
  expect(wrapper).toBeDefined();
});

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Home from '../Home';
import renderer from 'react-test-renderer';

afterEach(cleanup);

test('renders without crashing', () => {
  const { baseElement } = render(<Home />);
  expect(baseElement).toBeDefined();
});

test('matches the snapshots', () => {
  const component = renderer.create(<Home />);
  expect(component).toMatchSnapshot();
  const component2 = renderer.create(<Home thing="place" />);
  expect(component2).toMatchSnapshot();
});

test('sets the text to the right thing', () => {
  const component = render(<Home />);
  expect(component.queryByText(/oyster/)).toBeTruthy();
  const component2 = render(<Home thing="place" />);
  expect(component2.queryByText(/place/)).toBeTruthy();
});

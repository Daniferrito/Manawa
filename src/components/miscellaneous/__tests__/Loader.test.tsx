import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Loader from '../Loader';
import renderer from 'react-test-renderer';

afterEach(cleanup);

test('renders without crashing', () => {
  const { baseElement } = render(<Loader />);
  expect(baseElement).toBeDefined();
});

test('matches the snapshots', () => {
  const component = renderer.create(<Loader />);
  expect(component).toMatchSnapshot();
});

test('sets the text to the right thing', () => {
  const component = render(<Loader />);
  expect(component.queryByText(/Waiting.../)).toBeTruthy();
});

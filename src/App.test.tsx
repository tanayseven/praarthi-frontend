import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const loginElements = screen.getAllByText(/Login/);
  expect(loginElements).not.toHaveLength(0);
});

import React from 'react';
import { render } from '@testing-library/react';
import Component from './Component';
import Store from '../../todo/Store';
import { Provider } from 'react-redux';

test('renders learn react link', () => {
  const { getByText } = render(<Provider store={Store()}><Component /></Provider>);
  // const linkElement = getByText(/learn react/i);
  const linkElement = getByText(/Niezalogowany użytkownik/);
  expect(linkElement).toBeInTheDocument();
});

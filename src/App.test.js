import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Mamed Gohabur name', async () => {
  render(<App />);
  const nameElement = await screen.findByText(/Mamed Gohabur/i, {}, { timeout: 3000 });
  expect(nameElement).toBeInTheDocument();
});

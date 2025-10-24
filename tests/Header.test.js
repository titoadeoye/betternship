import { fireEvent, render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders products', () => {
  render(<App />);
  const notebookElement = screen.getByText(/Notebook/i);
  const penElement = screen.getByText(/Pen/i);
  const backpackElement = screen.getByText(/Backpack/i);

  expect(notebookElement).toBeInTheDocument();
  expect(notebookElement).toBeInTheDocument();
  expect(notebookElement).toBeInTheDocument();
});

test('add to cart button works', () => {
  render(<App />);
  const btnElement = screen.getByTestId('add-to-cart');
  fireEvent.click();
});

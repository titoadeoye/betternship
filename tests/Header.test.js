import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders products', () => {
  render(<App />);
  const notebookElement = screen.getByText(/Notebook/i);
  const penElement = screen.getByText(/Pen/i);
  const backpackElement = screen.getByText(/Backpack/i);

  expect(notebookElement).toBeInTheDocument();
  expect(penElement).toBeInTheDocument();
  expect(backpackElement).toBeInTheDocument();
});

// TEST CASE SUGGESTIONS
// test add to cart button click event
// test add to cart button updates cart items correctly
// test quantity increment when adding the same product again
// test discount code (SAVE10) reduces total price by 10%
// test invalid discount code does not alter total

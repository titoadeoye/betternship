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

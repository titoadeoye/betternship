import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders the header with the correct label', () => {
  render(<App />);
  const headerElement = screen.getByText(/Vite \+ React/i);
  expect(headerElement).toBeInTheDocument();
});

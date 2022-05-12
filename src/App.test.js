import { render, screen } from '@testing-library/react';
import Header from './components/Header/index';

test('renders header', () => {
  render(<Header />);
  const titleElement = screen.getByText(/Taskie/i);
  expect(titleElement).toBeInTheDocument();
});

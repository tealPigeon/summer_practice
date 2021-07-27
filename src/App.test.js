import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<Main_screen />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

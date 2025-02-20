import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn react/i);
  expect(linkElement).toBeInTheDocument();
});

function sum(a,b)
{
  return a+b;
}

test("test for sum",()=>{
  expect(sum(12,2)).toBe(14)
  
});

function square(n)
{
  return n*n;
}

test("test for square",()=>{
  expect(square(8)).toBe(64)
});

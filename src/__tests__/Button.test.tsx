import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import Button from '../components/Button/Button';

const textContent = 'Click me';

describe('Button component', () => {
  it('renders with default props', () => {
    const { getByRole } = render(<Button>Click me</Button>);
    const button = getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(textContent);
    expect(button).toHaveClass('text-white bg-blue-500 hover:bg-blue-600 text-base');
  });

  it('renders with "secondary" variant', () => {
    const { getByRole } = render(<Button variant="secondary">Click me</Button>);
    const button = getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(textContent);
    expect(button).toHaveClass('text-blue-500 bg-white border border-blue-500 hover:bg-blue-50 text-base');
  });

  it('renders with "success" variant', () => {
    const { getByRole } = render(<Button variant="success">Click me</Button>);
    const button = getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(textContent);
    expect(button).toHaveClass('text-white bg-green-500 hover:bg-green-600 text-base');
  });

  it('renders with "warning" variant', () => {
    const { getByRole } = render(<Button variant="warning">Click me</Button>);
    const button = getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(textContent);
    expect(button).toHaveClass('text-white bg-yellow-500 hover:bg-yellow-600 text-base');
  });

  it('renders with "danger" variant', () => {
    const { getByRole } = render(<Button variant="danger">Click me</Button>);
    const button = getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(textContent);
    expect(button).toHaveClass('text-white bg-red-500 hover:bg-red-600 text-base');
  });

  it('calls onClick callback when clicked', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<Button onClick={handleClick}>Click me</Button>);
    const button = getByRole('button');

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

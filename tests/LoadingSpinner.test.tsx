import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoadingSpinner from '../src/loader/LoadingSpinner/LoadingSpinner';

describe('LoadingSpinner Component', () => {
  it('renders with default props', () => {
    render(<LoadingSpinner />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveStyle('width: 50px');
    expect(spinner).toHaveStyle('height: 50px');
    expect(spinner).toHaveStyle('borderColor: blue');
  });

  it('renders with custom color and size', () => {
    render(<LoadingSpinner color="red" size="100px" />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toHaveStyle('width: 100px');
    expect(spinner).toHaveStyle('height: 100px');
    expect(spinner).toHaveStyle('borderColor: red');
  });
});

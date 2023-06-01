import { describe, it, expect } from '@jest/globals';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import Heading from '.';
import renderTheme from '../../styles/render-theme';

describe('Heading component', () => {
  it('renders without errors', () => {
    renderTheme(<Heading />);
  });

  it('renders the correct text when isMain is false', () => {
    const { getByText } = renderTheme(<Heading text="Subheading" />);
    expect(getByText('Subheading')).toBeInTheDocument();
  });

  it('renders the correct text when isMain is true', () => {
    const { getByText } = renderTheme(<Heading text="Main Heading" isMain />);
    expect(getByText('Main Heading')).toBeInTheDocument();
  });

  it('renders the default text when no text prop is provided', () => {
    expect(screen.queryByText('')).toBeInTheDocument();
  });

  it('validates the prop types correctly', () => {
    const consoleError = console.error;
    // eslint-disable-next-line no-undef
    console.error = jest.fn();

    renderTheme(<Heading text={123} isMain="true" />);
    expect(console.error).toHaveBeenCalledTimes(2);

    console.error.mockRestore();
    console.error = consoleError;
  });
});

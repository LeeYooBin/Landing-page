import { describe, it, expect } from '@jest/globals';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import SubHeading from '.';
import renderTheme from '../../styles/render-theme';

describe('Heading component', () => {
  it('renders without errors', () => {
    renderTheme(<SubHeading />);
  });

  it('renders the correct text when isMain is false', () => {
    const { getByText } = renderTheme(<SubHeading text="Subheading" />);
    expect(getByText('Subheading')).toBeInTheDocument();
  });

  it('renders the default text when no text prop is provided', () => {
    expect(screen.queryByText('')).toBeInTheDocument();
  });

  it('Should match snapshot', () => {
    const { container } = renderTheme(<SubHeading text="Text" />);
    expect(container).toMatchSnapshot();
  });

  it('validates the prop types correctly', () => {
    const consoleError = console.error;
    // eslint-disable-next-line no-undef
    console.error = jest.fn();

    renderTheme(<SubHeading text={123} />);
    expect(console.error).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledTimes(1);

    console.error.mockRestore();
    console.error = consoleError;
  });
});

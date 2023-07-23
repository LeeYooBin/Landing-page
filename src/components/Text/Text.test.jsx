import { describe, it, expect } from '@jest/globals';
import { screen } from '@testing-library/react';
import Text from '.';
import renderTheme from '../../styles/render-theme';

describe('Text component', () => {
  it('Should render with default values', () => {
    renderTheme(<Text />);
  });

  it('Should render the given text without errors', () => {
    renderTheme(<Text text="Text" />);
    expect(screen.getByText('Text')).toBeInTheDocument();
  });

  it('Should match snapshot', () => {
    const { container } = renderTheme(<Text text="Text" />);
    expect(container).toMatchSnapshot();
  });

  it('verifies propTypes', () => {
    const consoleError = console.error;
    // eslint-disable-next-line no-undef
    console.error = jest.fn();

    renderTheme(<Text text={123} />);
    expect(console.error).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledTimes(1);

    console.error.mockRestore();
    console.error = consoleError;
  });
});

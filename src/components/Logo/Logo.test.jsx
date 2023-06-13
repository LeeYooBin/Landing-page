import { describe, it, expect } from '@jest/globals';
import { screen } from '@testing-library/react';
import Logo from '.';
import renderTheme from '../../styles/render-theme';

describe('Logo component', () => {
  it('Should render without errors', () => {
    renderTheme(
      <Logo image="logo.png" href="https://example.com" isClickable />,
    );
  });

  it('renders image correctly', () => {
    renderTheme(<Logo image="logo.png" />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image.src).toContain('logo.png');
  });

  it('renders clickable link when isClickable is true', () => {
    renderTheme(
      <Logo image="logo.png" href="https://example.com" isClickable />,
    );
    const linkElement = screen.getByRole('link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.href).toContain('https://example.com');
  });

  it('renders non-clickable image when isClickable is false', () => {
    renderTheme(<Logo image="logo.png" />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('throws an error when image prop is missing', () => {
    expect(() => {
      renderTheme(<Logo />);
    }).toThrowError();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <Logo image="logo.png" href="https://example.com" isClickable />,
    );
    expect(container).toMatchSnapshot();
  });
});

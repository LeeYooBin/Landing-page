/* eslint-disable jsx-a11y/anchor-is-valid */
import { describe, it, expect } from '@jest/globals';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Link from '.';
import renderTheme from '../../styles/render-theme';

describe('Text component', () => {
  it('should render with default values', () => {
    renderTheme(<Link />);
  });

  it('renders Link component', () => {
    renderTheme(<Link link="example" />);
    expect(screen.getByText('Example')).toBeInTheDocument();
  });

  it('generates link correctly', () => {
    renderTheme(<Link link="example" />);
    const linkElement = screen.getByText('Example');
    expect(linkElement.getAttribute('href')).toBe('#example');
  });

  it('Should match snapshot', () => {
    const { container } = renderTheme(<Link />);
    expect(container).toMatchSnapshot();
  });
});

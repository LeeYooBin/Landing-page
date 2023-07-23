import { describe, it, expect } from '@jest/globals';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '.';
import renderTheme from '../../styles/render-theme';

describe('Text component', () => {
  it('Should render with default values', () => {
    renderTheme(<Navbar />);
  });

  it('should render with the props without errors', () => {
    renderTheme(<Navbar links={['link1', 'link2', 'link3']} />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('should display the menu correctly when it is open', () => {
    renderTheme(<Navbar links={['link1', 'link2', 'link3']} />);
    expect(screen.getAllByRole('link')).toHaveLength(3);
  });

  it('verifies links rendering', () => {
    renderTheme(<Navbar links={['link1', 'link2', 'link3']} />);
    const linkElements = screen.getAllByRole('link');

    expect(linkElements).toHaveLength(3);
    expect(linkElements[0]).toHaveAttribute('href', '#link1');
    expect(linkElements[1]).toHaveAttribute('href', '#link2');
    expect(linkElements[2]).toHaveAttribute('href', '#link3');
  });

  it('should have menu closed by default only on mobile screens', () => {
    renderTheme(<Navbar links={['link1', 'link2', 'link3']} />);
    const isMobile = window.innerWidth < 920;
    const element = screen.getByRole('navigation');

    if (isMobile) {
      expect(element).not.toBeVisible();
    } else {
      expect(element).toBeVisible();
    }
  });

  it('should toggle menu state when burger/x icon is clicked and render the links correctly', () => {
    renderTheme(<Navbar links={['link1', 'link2', 'link3']} />);
    const isMobile = window.innerWidth < 920;
    const button = screen.getByRole('button', { name: '' });
    const menu = screen.getByRole('navigation');

    if (isMobile) {
      expect(menu).not.toBeVisible();

      fireEvent.click(button);
      const linkElements = screen.getAllByRole('link');
      expect(menu).toBeVisible();
      expect(linkElements).toHaveLength(3);
      expect(linkElements[0]).toHaveAttribute('href', '#link1');
      expect(linkElements[1]).toHaveAttribute('href', '#link2');
      expect(linkElements[2]).toHaveAttribute('href', '#link3');

      fireEvent.click(button);
      expect(menu).not.toBeVisible();
    }
  });

  it('tests the functionality of the links', () => {
    renderTheme(<Navbar links={['section1', 'section2', 'section3']} />);
    const links = screen.getAllByRole('link');

    links.forEach((link) => {
      expect(() => {
        fireEvent.click(link);
      }).not.toThrow();
    });
  });

  it('Should match snapshot', () => {
    const { container } = renderTheme(<Navbar />);
    expect(container).toMatchSnapshot();
  });
});

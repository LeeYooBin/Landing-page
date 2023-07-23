import { describe, it, expect } from '@jest/globals';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import Gallery from '.';
import renderTheme from '../../styles/render-theme';

const mockImageList = [
  {
    image: 'image1.jpg',
    alt: 'Image 1',
  },
  {
    image: 'image2.jpg',
    alt: 'Image 2',
  },
];

describe('Heading component', () => {
  it('renders without errors', () => {
    renderTheme(<Gallery imageList={mockImageList} />);
  });

  it('renders correct number of images', () => {
    const { container } = renderTheme(<Gallery imageList={mockImageList} />);
    const images = container.querySelectorAll('img');
    expect(images.length).toBe(mockImageList.length);
  });

  it('renders images with correct src and alt attributes', () => {
    const { container } = renderTheme(<Gallery imageList={mockImageList} />);
    const images = container.querySelectorAll('img');

    images.forEach((img, index) => {
      expect(img.getAttribute('src')).toBe(mockImageList[index].image);
      expect(img.getAttribute('alt')).toBe(mockImageList[index].alt);
    });
  });

  it('Should match snapshot', () => {
    const { container } = renderTheme(<Gallery imageList={mockImageList} />);
    expect(container).toMatchSnapshot();
  });
});

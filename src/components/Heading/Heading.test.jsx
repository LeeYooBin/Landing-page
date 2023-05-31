import { describe, it } from '@jest/globals';
import { screen } from '@testing-library/react';
import Heading from '.';
import renderTheme from '../../styles/render-theme';

describe('<Heading />', () => {
  it('Should render with default values', () => {
    renderTheme(<Heading text="Texto" />);
    screen.getByRole('heading', { name: 'Texto' });
  });
});

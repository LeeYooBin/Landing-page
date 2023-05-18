import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import theme from './theme';

const renderTheme = (component) =>
  render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);

export default renderTheme;

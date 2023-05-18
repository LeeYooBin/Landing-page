import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/global-style';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <p>Hello world!</p>
  </ThemeProvider>
);

export default App;

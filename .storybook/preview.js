import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';
import GlobalStyles from '../src/styles/global-style';

/** @type { import('@storybook/react').Preview } */

const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  ),
];

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators,
};

export default preview;

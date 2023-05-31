import React from 'react';
// import '@testing-library/jest-dom/extend-expect';
import { describe, it } from '@jest/globals';
import renderTheme from './styles/render-theme';
import App from './App';

describe('App component', () => {
  it('renders', () => {
    renderTheme(<App />);
  });
});

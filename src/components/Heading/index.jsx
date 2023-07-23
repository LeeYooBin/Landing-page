import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../styles/theme';

const Header = styled.h2`
  font: ${({ isMain }) =>
    isMain ? theme.fonts.mobileHead : theme.fonts.heading2};
  color: ${theme.colors.text};
  text-align: center;

  @media screen and (min-width: 920px) {
    font: ${({ isMain }) =>
      isMain ? theme.fonts.display : theme.fonts.heading1};
    text-align: left;
  }
`;

const Heading = ({ text = '', isMain = false, ariaLabel = '' }) => (
  <Header isMain={isMain} aria-label={ariaLabel}>
    {text}
  </Header>
);

Heading.propTypes = {
  text: PropTypes.string,
  isMain: PropTypes.bool,
  ariaLabel: PropTypes.string,
};

export default Heading;

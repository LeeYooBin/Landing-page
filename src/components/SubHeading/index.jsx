import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../styles/theme';

const Content = styled.h2`
  font: ${theme.fonts.heading4};
  color: ${theme.colors.sun};
  text-align: center;
  line-height: 3.2rem;
  letter-spacing: 5px;
  text-transform: uppercase;

  @media screen and (min-width: 920px) {
    font: ${theme.fonts.heading3};
    text-align: left;
  }
`;

const SubHeading = ({ text = '' }) => <Content>{text}</Content>;

SubHeading.propTypes = {
  text: PropTypes.string,
};

export default SubHeading;

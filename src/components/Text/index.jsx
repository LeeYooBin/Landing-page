import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Content = styled.p`
  font: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
`;

const Text = ({ text }) => <Content>{text}</Content>;

Text.propTypes = {
  text: PropTypes.string,
};

export default Text;

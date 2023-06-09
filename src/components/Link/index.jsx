import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Content = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font: ${({ theme }) => theme.fonts.text1};
  position: relative;

  @media (min-width: 920px) {
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
    margin-left: 5vw;

    &:first-child {
      margin: 0;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background: ${({ theme }) => theme.colors.sun};
      transition: all 300ms ease-in-out;
    }

    &:hover::after {
      left: 0;
      width: 100%;
    }
  }
`;

const Link = ({ link = '' }) => (
  <Content href={`#${link}`}>
    {link.replace(/^\w/, (match) => match.toUpperCase())}
  </Content>
);

Link.propTypes = {
  link: PropTypes.string,
};

export default Link;

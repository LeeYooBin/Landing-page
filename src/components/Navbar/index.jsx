import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Content = styled.div``;

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  position: fixed;
  top: 2%;
  right: 3%;
  z-index: 20;

  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    background-color: ${({ theme }) => theme.colors.gray4};

    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(48deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ isOpen }) =>
        isOpen ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-48deg)' : 'rotate(0)')};
    }
  }

  @media (min-width: 920px) {
    display: none;
  }
`;

const Menu = styled.nav`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  width: auto;
  height: auto;
  min-height: 25vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10%;
  background-color: ${({ theme }) => theme.colors.backgroundMenu};
  position: fixed;
  top: 0;
  right: 0;
  text-align: center;
  padding-top: 5rem;
  z-index: 15;

  @media (min-width: 920px) {
    position: static;
    display: flex;
    padding: 0;
    margin: 0;
    flex-direction: row;
    background: transparent;
    position: static;
    width: auto;
    justify-content: flex-start;
    min-height: auto;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font: ${({ theme }) => theme.fonts.text1};

  @media (min-width: 920px) {
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
    margin-left: 5vw;

    &:nth-last-child(0) {
      margin: 0;
    }
  }
`;

const Navbar = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Content>
      <StyledBurger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Menu isOpen={isOpen}>
        {links.map((item) => (
          <Link
            href={`#${item}`}
            onClick={() =>
              setIsOpen((openState) => (openState ? !openState : openState))
            }
          >
            {item.replace(/^\w/, (match) => match.toUpperCase())}
          </Link>
        ))}
      </Menu>
    </Content>
  );
};

Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string),
};

export default Navbar;

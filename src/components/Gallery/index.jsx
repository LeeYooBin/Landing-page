import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import theme from '../../styles/theme';

const Content = styled.div`
  max-width: 100%;
  height: 27rem;
  // padding: 0 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 0.5rem;
    background-color: ${theme.colors.gray4};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.sun};
    border-radius: 0.5rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 25rem;
  border-radius: 0.8rem;

  @media screen and (min-width: 920px) {
    width: 32rem;
  }
`;
const Gallery = ({ imageList }) => (
  <Content>
    {imageList.map((item) => (
      <Image key={uuidv4()} src={item.image} alt={item.alt} />
    ))}
  </Content>
);

Gallery.propTypes = {
  imageList: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Gallery;

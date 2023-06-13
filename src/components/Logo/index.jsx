import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Content = styled.div`
  margin: 0;
  padding: 0;
  width: auto;
  height: auto;
`;

const Link = styled.a`
  width: auto;
  height: auto;
`;

const Image = styled.img`
  width: 20.1rem;
  height: 4.124rem;
`;

const Logo = ({ image, isClickable = false, href = '#' }) => {
  if (!image) {
    throw new Error('The prop `image` is required in Logo component.');
  }

  return (
    <Content>
      {isClickable ? (
        <Link href={href}>
          <Image src={image} alt="Logo" />
        </Link>
      ) : (
        <Image src={image} alt="Logo" />
      )}
    </Content>
  );
};

Logo.propTypes = {
  image: PropTypes.string.isRequired,
  isClickable: PropTypes.bool,
  href: PropTypes.string,
};

export default Logo;

import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Burguer = ({ onClick, isOpened }) => {
  return (
    <Container onClick={onClick} open={isOpened}>
      <div />
      <div />
      <div />
    </Container>
  );
};

Burguer.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOpened: PropTypes.func,
};

Burguer.defaultProps = {
  isOpened: false,
};

export default Burguer;

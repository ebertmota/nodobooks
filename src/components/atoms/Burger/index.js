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
  /**
   * Function called every time the button was clicked.
   */
  onClick: PropTypes.func.isRequired,
  /**
   * Defines the burger button type based if he is opened.
   */
  isOpened: PropTypes.bool,
};

Burguer.defaultProps = {
  isOpened: false,
};

export default Burguer;

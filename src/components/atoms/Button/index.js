import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const Button = ({ children, maxWidth, ...rest }) => {
  return (
    <Container type="button" {...rest} maxWidth={maxWidth}>
      {children}
    </Container>
  );
};

Button.propTypes = {
  maxWidth: PropTypes.string,
};

Button.defaultProps = {
  maxWidth: '178px',
};

export default Button;

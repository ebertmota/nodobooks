import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Button = ({ children, maxWidth, selected, unSelectable, ...rest }) => {
  return (
    <Container
      type="button"
      {...rest}
      maxWidth={maxWidth}
      selected={selected}
      unSelectable={unSelectable}
    >
      {children}
    </Container>
  );
};

Button.propTypes = {
  /**
   * Defines the button max width.
   */
  maxWidth: PropTypes.string,
  /**
   * Change button style if he is selected.
   */
  selected: PropTypes.bool,
  /**
   * Disable button hover effects
   */
  unSelectable: PropTypes.bool,
};

Button.defaultProps = {
  maxWidth: '178px',
  selected: false,
  unSelectable: false,
};

export default Button;

import React from 'react';
import PropTypes from 'prop-types';

import { InputElement } from './styles';

const Input = ({ backgroundColor, ...rest }) => {
  return <InputElement {...rest} backgroundColor={backgroundColor} />;
};

Input.propTypes = {
  backgroundColor: PropTypes.string,
};

Input.defaultProps = {
  backgroundColor: 'transparent',
};

export default Input;

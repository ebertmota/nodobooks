import React, { useEffect, useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import Input from '../../atoms/Input';

import { Container, InputContainer, ErrorIcon, ErrorMessage } from './styles';

const InputField = ({ name, labelText, containerStyle = {}, ...rest }) => {
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <label>{labelText}</label>

      <InputContainer
        style={containerStyle}
        isErrored={!!error}
        isFocused={isFocused}
        isFilled={isFilled}
        data-testid="input-container"
      >
        <Input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />

        {error && !isFilled && (
          <ErrorIcon title={error}>
            <FiAlertCircle color="#c53030" size={20} />
          </ErrorIcon>
        )}
      </InputContainer>
      {error && !isFilled && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  containerStyle: PropTypes.object,
  labelText: PropTypes.string.isRequired,
};

InputField.defaultProps = {
  containerStyle: {},
};

export default InputField;

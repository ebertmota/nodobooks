import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';

const SearchInput = ({ onChangeText, inputClick, inputRef }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputTextChanges = useCallback(
    e => {
      setInputValue(e.target.value);
      onChangeText(e.target.value);
    },
    [setInputValue, onChangeText],
  );

  return (
    <Container onClick={inputClick}>
      <label htmlFor="search-input">
        <FiSearch />
      </label>

      <input
        placeholder="Search"
        id="search-input"
        value={inputValue}
        ref={inputRef}
        onChange={handleInputTextChanges}
      />
    </Container>
  );
};

SearchInput.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  inputClick: PropTypes.func,
  inputRef: PropTypes.func,
};

SearchInput.defaultProps = {
  inputClick: () => {},
  inputRef: () => {},
};

export default SearchInput;

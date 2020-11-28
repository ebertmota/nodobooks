import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';

const SearchInput = ({ onChangeText }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputTextChanges = useCallback(
    e => {
      setInputValue(e.target.value);
      onChangeText(e.target.value);
    },
    [setInputValue, onChangeText],
  );

  return (
    <Container>
      <label htmlFor="search-input">
        <FiSearch />
      </label>

      <input
        placeholder="Search"
        id="search-input"
        value={inputValue}
        onChange={handleInputTextChanges}
      />
    </Container>
  );
};

SearchInput.propTypes = {
  onChangeText: PropTypes.func.isRequired,
};

export default SearchInput;

import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { Container } from './styles';

const SearchInput = ({ inputClick, inputRef }) => {
  const { push } = useHistory();
  const [inputValue, setInputValue] = useState('');

  const handleInputTextChanges = useCallback(
    e => {
      setInputValue(e.target.value);
    },
    [setInputValue],
  );

  const handleInputSubmit = useCallback(
    e => {
      e.preventDefault();
      push({
        pathname: '/search',
        search: `?book=${encodeURIComponent(inputValue)}`,
      });
    },
    [inputValue, push],
  );

  return (
    <Container onClick={inputClick} onSubmit={handleInputSubmit}>
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
  /**
   * Called every time the input was clicked
   */
  inputClick: PropTypes.func,
  /**
   * Ref value for input element
   */
  inputRef: PropTypes.func,
};

SearchInput.defaultProps = {
  inputClick: () => {},
  inputRef: () => {},
};

export default SearchInput;

import React from 'react';
import { FiSearch } from 'react-icons/fi';
// import searchIcon from '../../../assets/icons/search.svg';

import { Container } from './styles';

const SearchInput = () => {
  return (
    <Container>
      <label htmlFor="search-input">
        <FiSearch color="#FFF" />
      </label>

      <input placeholder="Search" id="search-input" />
    </Container>
  );
};

export default SearchInput;

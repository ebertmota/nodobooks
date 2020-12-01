import React from 'react';

import PropTypes from 'prop-types';
import Logo from '../../atoms/Logo';
import SearchInput from '../../atoms/SearchInput';
import NavMenu from '../../molecules/NavMenu';

import { Container, Content, LinkContainer } from './styles';

const Header = ({ inputValueChanges, onCategoryChange }) => {
  return (
    <Container>
      <Content>
        <LinkContainer to="/">
          <Logo />
          <NavMenu onCategoryChange={onCategoryChange} />

          <h1>Bookstore</h1>
        </LinkContainer>

        <SearchInput onChangeText={inputValueChanges} />
      </Content>
    </Container>
  );
};

Header.propTypes = {
  inputValueChanges: PropTypes.func.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};

export default Header;

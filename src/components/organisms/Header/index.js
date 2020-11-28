import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../atoms/Logo';
import SearchInput from '../../atoms/SearchInput';
import NavMenu from '../../molecules/NavMenu';

import { Container, Content, Divider } from './styles';

const Header = ({ inputValueChanges }) => {
  return (
    <Container>
      <Content>
        <Divider>
          <Logo />
          <NavMenu />

          <h1>Bookstore</h1>
        </Divider>

        <SearchInput onChangeText={inputValueChanges} />
      </Content>
    </Container>
  );
};

Header.propTypes = {
  inputValueChanges: PropTypes.func.isRequired,
};

export default Header;

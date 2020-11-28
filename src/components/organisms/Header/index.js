import React from 'react';

import Logo from '../../atoms/Logo';
import SearchInput from '../../atoms/SearchInput';

import { Container, Content } from './styles';

const Header = () => {
  return (
    <Container>
      <Content>
        <div>
          <Logo />
          <h1>Bookstore</h1>
        </div>

        <SearchInput />
      </Content>
    </Container>
  );
};

export default Header;

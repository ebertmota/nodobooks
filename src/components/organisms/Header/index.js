import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../../atoms/Logo';
import SearchInput from '../../atoms/SearchInput';
import NavMenu from '../../molecules/NavMenu';

import { Container, Content, MenuContainer } from './styles';

const Header = ({
  inputValueChanges,
  inputClick,
  inputRef,
  onCategoryChange,
}) => {
  return (
    <Container>
      <Content>
        <MenuContainer>
          <Link to="/">
            <Logo />
          </Link>

          <NavMenu onCategoryChange={onCategoryChange} />
          <Link to="/">
            <h1>Bookstore</h1>
          </Link>
        </MenuContainer>

        <SearchInput
          onChangeText={inputValueChanges}
          inputClick={inputClick}
          inputRef={inputRef}
        />
      </Content>
    </Container>
  );
};

Header.propTypes = {
  inputValueChanges: PropTypes.func.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  inputClick: PropTypes.func,
  inputRef: PropTypes.func,
};

Header.defaultProps = {
  inputClick: () => {},
  inputRef: () => {},
};

export default Header;

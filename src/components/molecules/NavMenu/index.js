import React, { useState } from 'react';
import Burger from '../../atoms/Burger';
import Menu from '../../atoms/Menu';

import { Container } from './styles';

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Burger onClick={() => setIsOpen(!isOpen)} isOpened={isOpen} />
      <Menu isOpened={isOpen} />
    </Container>
  );
};

export default NavMenu;

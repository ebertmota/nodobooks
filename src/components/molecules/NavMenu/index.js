import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Burger from '../../atoms/Burger';
import Menu from '../../atoms/Menu';

import { Container } from './styles';

const NavMenu = ({ onCategoryChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryChanges = useCallback(
    async e => {
      onCategoryChange(e);
      setIsOpen(false);
    },
    [onCategoryChange],
  );

  return (
    <Container>
      <Burger onClick={() => setIsOpen(!isOpen)} isOpened={isOpen} />
      <Menu isOpened={isOpen} onCategoryChange={handleCategoryChanges} />
    </Container>
  );
};

NavMenu.propTypes = {
  /**
   * Will be pass to Menu component inside NavMenu
   */
  onCategoryChange: PropTypes.func.isRequired,
};

export default NavMenu;

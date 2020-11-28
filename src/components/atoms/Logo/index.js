import React from 'react';

import logoImg from '../../../assets/logo.svg';

import { Container } from './styles';

const Logo = () => (
  <Container>
    <img src={logoImg} alt="nodo" />
  </Container>
);

export default Logo;

import React from 'react';

import Header from '../../components/organisms/Header';

import bannerImg from '../../assets/banner.svg';

import { Container, Content, BannerImage } from './styles';

const Home = () => {
  return (
    <Container>
      <Header />

      <Content>
        <BannerImage src={bannerImg} alt="Big Summer Sale" />
        <h1>Home page here</h1>
      </Content>
    </Container>
  );
};

export default Home;

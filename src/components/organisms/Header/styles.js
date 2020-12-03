import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  width: 100%;
  padding: 0 15px;
  z-index: 10;
  min-height: 116px;
  color: #0a0a0a;

  @media (max-width: 700px) {
    background: #0a0a0a;
    a {
      color: #fbfdff;
    }
  }
`;

export const Content = styled.header`
  display: flex;
  align-items: center;
  max-width: 1135px;
  justify-content: space-between;

  width: 100%;

  @media (max-width: 700px) {
    flex-direction: column;

    padding: 15px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  z-index: 10;
  height: 32px;
  h1 {
    margin-left: 16px;
    font-size: 22px;
    line-height: 29.26px;
  }

  @media (max-width: 700px) {
    width: 100%;
    padding-left: 2px;
    margin: 15px 10px 20px 10px;
  }

  @media (max-width: 400px) {
    height: 10px;

    h1 {
      font-size: 20px;
    }
  }
`;

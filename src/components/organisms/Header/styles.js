import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  width: 100%;
  min-height: 116px;
  height: 100%;
  color: #0a0a0a;

  @media (max-width: 700px) {
    background: #0a0a0a;
    color: #fbfdff;
  }
`;

export const Content = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 58px;

  width: 100%;
  max-width: 1280px;

  @media (max-width: 700px) {
    flex-direction: column;

    padding: 15px;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  z-index: 10;
  height: 32px;
  h1 {
    margin-left: 16px;
    font-size: 24px;
    line-height: 29.26px;
  }

  @media (max-width: 700px) {
    width: 100%;
    padding-left: 2px;
    margin: 15px 10px 20px 10px;
  }
`;

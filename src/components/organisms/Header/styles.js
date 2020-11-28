import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;

  width: 100%;
  height: 116px;
`;

export const Content = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 58px;

  width: 100%;
  max-width: 1280px;

  > div {
    display: flex;
    align-items: center;

    h1 {
      margin-left: 16px;
      font-size: 24px;
      line-height: 29.26px;
    }
  }
`;

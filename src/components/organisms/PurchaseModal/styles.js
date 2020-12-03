import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  height: 100%;
`;

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 24px;
    color: #1c2a39;
    margin-bottom: 25px;
  }

  button + button {
    margin-left: 40px;
  }

  @media (max-width: 700px) {
    button {
      max-width: 100%;
    }
    button + button {
      margin-top: 10px;
      margin-left: 0px;
    }
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ResponseContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 423px;
  width: 100%;

  header {
    h1 {
      font-size: 24px;
      color: #1c2a39;
      margin-bottom: 25px;
    }
  }
`;

export const ResponseContent = styled.div`
  flex: 1;
  display: flex;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      margin-right: 20px;
      max-width: 121px;
    }

    span {
      font-family: 'Open Sans';
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;
    }
  }
`;

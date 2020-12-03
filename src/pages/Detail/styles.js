import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  min-height: 100vh;
  padding-top: 116px;
  height: 100%;
  width: 100%;
  max-width: 1135px;
  @media (min-width: 1024px) {
    display: flex;
  }

  @media (max-width: 1024px) {
    padding: 180px 0px;
  }
`;

export const MenuContainer = styled.div`
  margin-left: -15%;
  margin-top: 50px;

  @media (max-width: 1366px) {
    margin-left: -5%;
  }
`;

export const BookContainer = styled.div`
  width: 100%;
  margin: 50px 40px 0px 40px;
  padding: 0 40px;

  @media (max-width: 700px) {
    padding: 0 20px;
    margin: 0;
  }
`;

export const BookItem = styled.div`
  width: 100%;
  display: flex;
  font-family: 'Open-sans', sans-serif;
  color: #5c6a79;

  > div:nth-child(1) {
    max-width: 212px;

    img {
      width: 100%;
      background: #5c6a79;
      box-shadow: -2px 8px 10px -6px rgba(0, 0, 0, 0.4);
    }
  }

  div + div {
    display: flex;
    flex-direction: column;

    header {
      > strong {
        display: block;
        margin: 5px 0;
        font-family: 'Montserrat', sans-serif;
        color: #1c2a39;
        font-size: 16px;
      }
    }

    flex: 1;

    width: 100%;
    font-size: 14px;
    margin: 0 40px;

    p {
      margin-top: 15px;
      font-size: 14px;
      line-height: 24px;
    }
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div + div {
      header {
        position: absolute;
        top: 180px;
        > strong {
          text-align: left;
          font-size: 24px;
          line-height: 29.26px;
        }
      }
      text-align: center;

      button {
        margin: 0 auto;
        max-width: 345px;
      }

      p {
        max-width: 345px;
        margin: 0 auto;
        margin-top: 30px;
        text-align: left;
        font-size: 14px;
      }
    }

    > div:nth-child(1) {
      margin-top: 80px;
      max-width: 412px;
    }
  }
  @media (min-width: 1024px) and (max-width: 1366px) {
    img {
      max-width: 170px;
    }
  }
`;

export const BookPrice = styled.span`
  margin: 15px auto;
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  color: #1c2a39;
  font-size: 16px;
  font-weight: 700;

  @media (max-width: 700px) {
    font-size: 24px;
    line-height: 29.26px;
  }
`;

export const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin: 5px 0 10px 0;
  .rating-stars {
    span {
      font-size: 16px;
      padding: 0;
    }
    padding: 0;
  }

  > span {
    margin-left: 10px;
    text-align: left;
    width: 100%;
    max-width: 60px;
    font-size: 11px;
  }
`;

export const BookAuthor = styled.span`
  text-align: left;
  display: flex;
  align-items: left;
  margin: 10px 0;

  @media (max-width: 900px) {
    margin: 0;
  }

  @media (max-width: 700px) {
    font-size: 12px;
  }
`;

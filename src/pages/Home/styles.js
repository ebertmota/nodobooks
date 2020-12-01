import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1135px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    padding: 0 15px;
  }

  @media (max-width: 1024px) {
    padding: 10% 0px;
  }

  @media (max-width: 700px) {
    padding-top: 186px;
  }
`;

export const BannerImage = styled.img`
  background: #ffe0e2;
  width: 100%;
  padding: 0;
`;

export const Main = styled.main`
  display: flex;
`;

export const MenuContainer = styled.div`
  margin-top: 150px;
  margin-left: -15%;

  @media (max-width: 1366px) {
    margin-left: -5%;
  }
`;

export const BookList = styled.div`
  margin-top: 200px;
  margin-left: -5%;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;

  @media (max-width: 1150px) {
    margin-left: -10%;
  }

  @media (max-width: 1024px) {
    padding: 0 40px;
    grid-gap: 32px 10%;
    margin-left: auto;
    margin-top: 100px;
  }
`;

export const BookItem = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  font-family: 'Open-sans', sans-serif;
  color: #5c6a79;
  a {
    display: flex;
    width: 100%;
    img {
      width: 100%;
      max-width: 212px;
      background: #5c6a79;
      box-shadow: -2px 8px 20px -6px rgba(0, 0, 0, 0.4);
    }
  }

  > div {
    width: 100%;
    font-size: 14px;
    margin-left: 40px;

    p {
      height: 50px;
      text-align: left;
      margin-bottom: 8px;
      overflow: hidden;
    }

    > a {
      font-weight: 700;
      display: block;
      margin: 5px 0;
      font-family: 'Montserrat', sans-serif;
      color: #1c2a39;
      font-size: 16px;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 300px;

    img {
      max-width: 250px;
    }

    > div {
      max-width: 250px;
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 0px;

      p {
        display: none;
      }

      strong {
        height: 50px;
      }
    }
  }

  @media (min-width: 1024px) and (max-width: 1366px) {
    max-width: 424px;

    img {
      max-width: 170px;
    }

    div {
      max-width: 150px;
    }
  }

  @media (min-width: 900px) and (max-width: 1024px) {
    max-width: 450px;
  }
`;

export const BookAuthor = styled.span`
  margin: 10px 0;

  @media (max-width: 900px) {
    margin: 0;
  }
`;

export const BookPrice = styled.span`
  margin: 15px 0;
  display: block;
  font-family: 'Montserrat', sans-serif;
  color: #1c2a39;
  font-size: 16px;
  font-weight: 700;
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

  @media (max-width: 900px) {
    display: none;
  }

  @media (max-width: 1180px) {
    > span {
      display: none;
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BannerImage = styled.div`
  background-image: url(${props => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 702px;
  padding: 0;
`;

export const Main = styled.main`
  display: flex;
  align-items: top;
  margin-left: -100px;
`;

export const MenuContainer = styled.div``;

export const BookList = styled.div`
  margin-top: 200px;
  width: 100%;
  max-width: 1280px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  grid-gap: 80px 40px;
  margin-left: -130px;
`;

export const BookItem = styled.div`
  display: flex;
  width: 100%;
  max-width: 424px;
  align-items: center;
  margin: 0 20px;

  font-family: 'Open-sans', sans-serif;
  color: #5c6a79;
  img {
    background: #5c6a79;
    box-shadow: -2px 8px 20px -6px rgba(0, 0, 0, 0.4);
  }

  > div {
    width: 100%;
    font-size: 14px;
    margin-left: 40px;
    > span {
      margin-bottom: 10px;
      display: block;
    }
    p {
      height: 50px;
      text-align: left;
      margin-bottom: 8px;
      overflow: hidden;
    }
  }
`;

export const BookTitle = styled.strong`
  margin: 20px 0;
  font-family: 'Montserrat', sans-serif;
  color: #1c2a39;
  font-size: 16px;
`;

export const BookPrice = styled.strong`
  color: red;
  font-family: 'Montserrat', sans-serif;
  color: #1c2a39;
  font-size: 14px;
`;

export const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  .rating-stars {
    span {
      font-size: 20px;
      margin: 2px;
      padding: 0;
    }
    padding: 0;
    width: 120px;
  }

  > span {
    width: 100%;
    max-width: 60px;
    font-size: 11px;
  }
`;

export const Button = styled.button`
  display: block;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
  padding: 15px;
  background: #fff;

  color: #4c3db2;
  border: 1px solid #4c3db2;

  font-weight: 700;
  transition: background 0.2s linear;

  &:hover {
    background: #4c3db2;
    color: #fff;
  }
`;

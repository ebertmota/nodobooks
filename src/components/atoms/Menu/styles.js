import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${props =>
    props.maxWidth &&
    css`
      min-width: 0px;
      max-width: ${props.maxWidth};
    `}
  transition: opacity 0.3s linear;
  background: #efeef6;
  width: 100%;
  height: 100vh;
  @media (max-width: 1024px) {
    position: absolute;
    top: 0;
    left: 0;
    opacity: ${({ open }) => (open ? '1' : '0')};
    transform: ${({ open }) =>
      open ? 'translateY(100px)' : 'translateY(-100%)'};
  }

  @media (max-width: 700px) {
    padding: 20px;
    transform: ${({ open }) =>
      open ? 'translateY(82px)' : 'translateY(-100%)'};
  }

  @media (max-width: 400px) {
    padding: 20px;
    transform: ${({ open }) =>
      open ? 'translateY(60px)' : 'translateY(-100%)'};
  }

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px;
    width: 100%;
    min-width: 416px;
    height: 710px;
  }
`;

export const CategoryList = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  height: 100%;

  padding: 60px 20px;

  @media (max-width: 700px) {
    min-height: 100vh;
    padding: 10px;
  }
`;

export const CategoryItem = styled.li`
  list-style: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  text-decoration: none;
  margin: 15px 0;
  color: #5c6a79;

  ${props =>
    props.selected &&
    css`
      color: #1c2a39;
      font-weight: 700;
      margin-bottom: 15px;

      > span {
        font-size: 18px;

        margin-left: 10px;
      }
    `}

  @media (max-width: 700px) {
    margin: 12px 0;
  }
`;

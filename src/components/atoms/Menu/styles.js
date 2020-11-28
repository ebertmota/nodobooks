import styled, { css } from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;

  background: #efeef6;
  height: 100vh;
  width: 100%;

  transition: opacity 0.3s linear;
  z-index: 1;
  padding: 60px 20px;

  @media (max-width: 1024px) {
    position: absolute;
    top: 0;
    left: 0;
    opacity: ${({ open }) => (open ? '1' : '0')};
    transform: ${({ open }) =>
      open ? 'translateY(82px)' : 'translateY(-100%)'};
  }

  @media (min-width: 1024px) {
    justify-content: center;
    align-items: left;
    padding: 0 100px;
    width: 100%;
    min-width: 416px;
    margin-top: 200px;
    height: 710px;
  }
`;

export const CategoryItem = styled.p`
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
`;

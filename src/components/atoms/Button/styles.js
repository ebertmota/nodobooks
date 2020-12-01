import styled from 'styled-components';

export const Container = styled.button`
  max-width: ${props => props.maxWidth && props.maxWidth};
  display: block;
  cursor: pointer;
  width: 100%;
  margin-top: 30px;
  padding: 15px;
  background: #fff;

  color: #4c3db2;
  border: 1px solid #4c3db2;

  font-weight: 700;
  font-size: 12px;
  transition: background 0.2s linear;

  &:hover {
    background: #4c3db2;
    color: #fff;
  }

  @media (max-width: 1366px) {
    margin-top: 10px;
    padding: 10px;
  }

  @media (max-width: 900px) {
    margin-top: 0;
  }
`;

import styled from 'styled-components';

export const InputElement = styled.input`
  flex: 1;
  width: 100%;
  background: ${props => props.backgroundColor};
  border: 0;
  color: #333333;
  &::placeholder {
    color: #666360;
  }
`;

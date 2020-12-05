import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;

  label {
    margin-bottom: 10px;
  }
`;

export const InputContainer = styled.div`
  background: #f7f7f7;
  color: #a6a6a6;
  border-radius: 4px;
  padding: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid #e2e2e2;

  input {
    width: 100%;
    background: transparent;
    border: 0;
    &::placeholder {
      color: #666360;
    }
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      color: #4c3db2;
      border-color: #4c3db2;
    `}
  ${props =>
    props.isFilled &&
    css`
      color: #333333;
      border-color: #e2e2e2;
    `}
  & + div {
    margin-top: 8px;
  }

  svg {
    margin-right: 16px;
  }

  @media (max-width: 1366px) {
    padding: 10px;
  }
`;

export const ErrorIcon = styled.div`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
`;

export const ErrorMessage = styled.span`
  margin-top: 10px;
  color: #c53030;
`;

import styled from 'styled-components';

export const Container = styled.div`
  background: #000;
  width: 100%;
  border-radius: 4px;
  max-width: 500px;
  height: 43px;
  padding: 0 13px;

  label {
    display: flex;
    align-items: center;
  }

  input {
    font-weight: 600;
    margin-left: 13px;
    width: 100%;
    background: #000;
    border: 0;
    color: #fff;

    ::placeholder {
      color: #fff;
    }
  }
`;

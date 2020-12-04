import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: #0a0a0a;
  width: 100%;
  border-radius: 4px;
  max-width: 500px;
  padding: 15px;

  label {
    display: flex;
    align-items: center;

    svg {
      color: #fff;
    }
  }

  input {
    width: 100%;
    background: transparent;
    font-weight: 600;
    margin-left: 13px;
    border: 0;
    color: #fff;

    svg {
      color: #fff;
    }

    ::placeholder {
      color: #fff;
    }
  }

  @media (max-width: 1024px) {
    max-width: 40%;
  }

  @media (max-width: 700px) {
    max-width: 100%;
    background: #fff;
    label {
      svg {
        color: #0a0a0a;
      }
    }

    input {
      font-size: 16px;

      color: #0a0a0a;

      ::placeholder {
        color: #0a0a0a;
      }
    }
  }
  @media (max-width: 400px) {
    padding: 10px;
  }
`;

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
  }
  h1{
    font-weight: 700;
  }

  h2 {
    font-weight: 600;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #1C2A39;
  }
`;

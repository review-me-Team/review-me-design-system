import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }
  article, aside, details, footer, header, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
`;

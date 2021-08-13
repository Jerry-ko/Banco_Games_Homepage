import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body, #root {
    height: 100%;
    background-color: black;
    color: white;
    max-width: 1200px;
    margin: 0 auto;
  }

  * {
	  box-sizing: border-box;
  }
  
  
  body {
      font-family: 'Noto Sans KR', sans-serif;   
  }

  .full-width {
	  width: 100%;
  }

`;

export default GlobalStyle;

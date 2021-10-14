import { createGlobalStyle } from "styled-components";

const mainTheme = {
  // sizes
  headerHeight: '60px',
  sidebarWidth: '370px',

  // colors
  headerBlue: "#4a545f",
  resourceBlue: "#5291eb",
  paragraphGrey: "#bfbfbf",

  lightGrey: "#fafafa",
  darkerGrey: "#f5f5f5",
  darkGrey: "#A9A9A9",
};

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: Avenir;
    src: url('../../assets/fonts/Avenir-medium.otf') format('otf');
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: 'Avenir';
  }

  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    background-color: #f3f3f3;
  }



@media only screen and (max-width: 480px) {

  html {
    font-size: 8px;
  }
   
}

`;

export const theme = mainTheme;
export default GlobalStyle;

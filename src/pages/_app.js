import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}


:root {
  --white: #fff;

  --cyan-lgt: #e6f4ff;
  --cyan-dark: #11456c;
  --blue: #131a78;

  --gray-bg: #F8F8F8;
  --gray-title: #3d3d3d;
  --gray-text: #303030;

  --black: #000;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

@font-face {
  font-family: "Nexa";
  src: url("/fonts/NexaBlack.otf") format("opentype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Graphik";
  src: url("/fonts/GraphikRegular.otf") format("opentype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Graphik";
  src: url("/fonts/GraphikSemibold.otf") format("opentype");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

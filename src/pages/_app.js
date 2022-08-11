import { createGlobalStyle } from "styled-components";
import FontsStyles from "../styles/fonts";

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

html {
  scroll-behavior: smooth;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}


`;
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <FontsStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

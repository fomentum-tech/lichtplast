import { createGlobalStyle } from "styled-components";

const FontsStyles = createGlobalStyle`
  @font-face {
      font-family: 'Graphik';
      src: url("/fonts/GraphikRegular.otf") format("opentype");
      src: url('/fonts/Graphik-Regular.eot');
      src: url('/fonts/Graphik-Regular.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Graphik-Regular.woff2') format('woff2'),
          url('/fonts/Graphik-Regular.woff') format('woff'),
          url('/fonts/Graphik-Regular.ttf') format('truetype'),
          url('/fonts/Graphik-Regular.svg#Graphik-Regular') format('svg');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Graphik';
      src: url("/fonts/GraphikSemibold.otf") format("opentype");
      src: url('/fonts/Graphik-Semibold.eot');
      src: url('/fonts/Graphik-Semibold.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Graphik-Semibold.woff2') format('woff2'),
          url('/fonts/Graphik-Semibold.woff') format('woff'),
          url('/fonts/Graphik-Semibold.ttf') format('truetype'),
          url('/fonts/Graphik-Semibold.svg#Graphik-Semibold') format('svg');
      font-weight: 600;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Nexa';
      src: url("/fonts/NexaBlack.otf") format("opentype");
      
      src: url('/fonts/Nexa-Black.eot');
      src: url('/fonts/Nexa-Black.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Nexa-Black.woff2') format('woff2'),
          url('/fonts/Nexa-Black.woff') format('woff'),
          url('/fonts/Nexa-Black.ttf') format('truetype'),
          url('/fonts/Nexa-Black.svg#Nexa-Black') format('svg');
      font-weight: 900;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Nexa';
      src: url('Nexa-XBold.eot') format("opentype");
      src: url('Nexa-XBold.eot');
      src: url('Nexa-XBold.eot?#iefix') format('embedded-opentype'),
          url('Nexa-XBold.woff2') format('woff2'),
          url('Nexa-XBold.woff') format('woff'),
          url('Nexa-XBold.ttf') format('truetype'),
          url('Nexa-XBold.svg#Nexa-XBold') format('svg');
      font-weight: 800;
      font-style: normal;
      font-display: swap;
  }
`;

export default FontsStyles;

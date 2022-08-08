import styled from "styled-components";

export const Hero = styled.div`
  width: 100%;
  height: 760px;
  position: relative;
  display: flex;

  .swiper-slider {
    position: absolute;
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
  margin: 51px 0 71px;
  z-index: 100;
  position: absolute;
`;

export const HeroWrapper = styled.div`
  width: 90%;
  max-width: 1120px;
  margin: 0 auto;

  @media (min-width: 1900px) {
    max-width: 1440px;
  }

  p {
    margin: 210px 0 226px;
    width: 570px;
    font-family: "Nexa";
    font-weight: 900;
    font-size: 38px;
    line-height: 57px;
    text-transform: uppercase;

    color: var(--white);
  }
`;

export const HeroHeader = styled.header`
  display: flex;
  justify-content: space-between;
  img {
    width: 250px;
    height: 31.74px;
  }

  nav {
    ul {
      display: flex;
      align-items: center;

      li {
        list-style-type: none;

        & + li {
          margin-left: 28px;
        }

        a {
          font-family: "Baloo 2";
          font-weight: 600;
          font-size: 22px;
          text-transform: uppercase;
          cursor: pointer;

          color: var(--white);
        }
      }
    }
  }
`;

export const HeroBg = styled.div`
  width: 100%;
  height: 100%;

  background: linear-gradient(
      0deg,
      rgba(17, 69, 108, 0.6),
      rgba(17, 69, 108, 0.6)
    ),
    url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

export const HeroDetails = styled.div`
  width: 100%;
  height: 3px;
  background: var(--blue);
  border-radius: 0 2px 2px 0;

  div {
    border-radius: 2px 0 0 2px;
    width: 85%;
    height: 100%;
    background: var(--white);
  }
`;

export const Main = styled.main`
  margin: 125px 0 171px;
`;

export const About = styled.section`
  width: 90%;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1900px) {
    max-width: 1440px;
  }
`;

export const AboutContent = styled.div`
  width: 48%;
  max-width: 493px;
  h1 {
    font-family: "Nexa";
    text-transform: uppercase;
    font-weight: 900;
    font-size: 38px;

    color: var(--gray-title);

    img {
      margin-top: 10px;
      display: block;
    }
  }
  p {
    margin: 36px 0 68px;

    font-family: "Graphik";
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;

    color: var(--gray-text);
  }

  button {
    padding: 11px 42px;

    font-family: "Graphik";
    font-weight: 600;
    font-size: 18px;

    border: none;
    border-radius: 50px;
    box-shadow: 0px 10px 20px rgba(17, 69, 108, 0.2);

    background: var(--cyan-dark);
    color: var(--white);
  }
`;

export const AboutImages = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 48%;

  div {
    display: flex;
    flex-direction: column;
    margin-right: 26px;

    img:last-child {
      margin-top: 26px;
    }
  }
`;

export const Values = styled.section`
  width: 100%;
  margin-top: 125px;
  padding: 110px 0;

  background: var(--gray-bg);
`;

export const ValuesWrapper = styled.div`
  width: 90%;
  max-width: 1120px;

  margin: 0 auto;

  @media (min-width: 1900px) {
    max-width: 1440px;
  }

  h2 {
    font-family: "Nexa";
    font-weight: 900;
    font-size: 22px;
    text-transform: uppercase;

    color: var(--cyan-dark);
  }
`;

export const ValuesCards = styled.div`
  margin-top: 28px;
  display: grid;
  column-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
  justify-content: space-between;

  @media (max-width: 1120px) {
    row-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
  }
`;

export const ValuesCard = styled.div`
  min-height: 169px;
  position: relative;
  overflow: hidden;

  & + div {
    margin-left: 20px;
  }

  background: var(--white);
  border-radius: 5px;

  div {
    margin: 26px 21px 29px;

    strong {
      font-family: "Nexa", sans-serif;
      font-weight: 900;
      font-size: 18px;
      text-transform: uppercase;

      color: var(--cyan-dark);
    }

    p {
      margin-top: 18px;
      font-family: "Graphik";
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;

      color: var(--gray-text);
    }
  }
`;

export const ValuesCardIcon = styled.div`
  width: 63px;
  height: 63px;
  border-radius: 50%;
  background: var(--cyan-dark);
  position: absolute;
  right: -38px;
  top: -46px;
  z-index: 2;

  img {
    width: 26px;
    height: 26px;
    margin: 26px 23px 11px 14px;
  }
`;

export const Enterprise = styled.section`
  width: 100%;
  display: flex;

  @media (max-width: 1120px) {
    flex-direction: column;
  }

  img {
    width: 56%;

    @media (max-width: 1120px) {
      width: 100%;
      height: 500px;
    }

    @media (max-width: 768px) {
      height: 350px;
    }
  }
`;

export const EnterpriseContent = styled.div`
  width: 44%;
  padding: 75.5px 60.5px;

  background: var(--cyan-dark);

  @media (max-width: 1120px) {
    width: 100%;
  }

  h2 {
    margin-bottom: 18px;

    font-family: "Nexa";
    font-weight: 900;
    font-size: 32px;

    color: var(--white);

    @media (min-width: 1900px) {
      font-size: 36px;
      margin-bottom: 30px;
    }
  }

  p {
    font-family: "Graphik";
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;

    color: var(--white);

    & + p {
      margin-top: 30px;
    }

    @media (min-width: 1900px) {
      font-size: 24px;
      line-height: 36px;
    }
  }
`;

export const Contact = styled.section`
  width: 90%;
  max-width: 1120px;
  margin: 165px auto 0;

  display: flex;

  @media (min-width: 1900px) {
    max-width: 1440px;
  }

  @media (max-width: 1120px) {
    flex-direction: column;
  }
`;

export const ContactInfo = styled.div`
  width: 41.67%;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  padding: 122.5px 46px 122.5px 52px;

  background: var(--cyan-lgt);

  @media (max-width: 1120px) {
    width: 100%;
  }

  h2 {
    font-family: "Nexa";
    font-weight: 900;
    font-size: 32px;
    text-transform: uppercase;

    color: var(--cyan-dark);
  }

  p {
    margin: 13px 0 38px;
    font-family: "Graphik";
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;

    color: var(--gray-text);
  }

  a {
    font-family: "Graphik";
    font-weight: 600;
    font-size: 18px;

    color: var(--blue);
  }
`;

export const Footer = styled.footer`
  width: 100%;

  position: absolute;

  background: var(--cyan-dark);
`;

export const FooterWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1120px;
  position: relative;
  top: -133px;

  iframe {
    width: 100%;
    height: 265px;

    border: 2px solid var(--cyan-dark);
    border-radius: 5px;
  }

  @media (min-width: 1900px) {
    max-width: 1440px;
  }
`;

export const FooterContent = styled.div`
  width: 100%;
  margin-top: 82px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    img {
      width: 250px;
      height: 31.74px;
    }

    strong {
      font-family: "Graphik";
      font-weight: 600;
      font-size: 18px;

      color: var(--white);
    }

    &:last-child {
      margin-top: 48px;
      align-items: flex-end;
    }

    p {
      max-width: 344px;
      font-family: "Graphik";
      font-weight: 400;
      font-size: 18px;
      line-height: 30px;

      color: var(--white);
    }

    a {
      font-family: "Nexa";
      font-weight: 900;
      font-size: 18px;

      color: var(--white);

      border-bottom: 2px solid var(--white);
    }
  }
`;

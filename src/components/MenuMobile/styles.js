import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: none;
  z-index: 1000;

  transition: all 0.8s;

  @media (max-width: 899px) {
    display: inherit;
  }

  svg {
    cursor: pointer;
    position: absolute;
    z-index: 100;
    right: 3%;
    top: 6%;

    color: var(--white);
  }

  nav {
    height: 100vh;
    width: 60%;
    position: absolute;
    right: 0;
    padding: 150px 15px 30px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background: var(--cyan-dark);

    ul {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      align-items: flex-end;
      text-align: center;

      li {
        width: 100%;
        list-style-type: none;
        & + li {
          margin-top: 40px;
        }

        a {
          text-align: end;
          font-family: "Baloo 2";
          font-weight: 600;
          font-size: 28px;
          text-transform: uppercase;
          cursor: pointer;

          color: var(--white);
        }
      }
    }
  }
`;

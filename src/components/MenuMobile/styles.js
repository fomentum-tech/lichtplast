import styled from "styled-components";

export const Container = styled.div`
  position: absolute;

  width: 100vw;
  min-height: 100vh;
  max-width: 100vw;
  display: none;
  z-index: 1000;

  @media (max-width: 899px) {
    display: initial;
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
    display: none;
    width: 90%;
    margin: 150px auto 0;

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      align-items: flex-end;

      li {
        list-style-type: none;
        border-bottom: 1px solid var(--white);

        & + li {
          margin-top: 40px;
        }

        a {
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

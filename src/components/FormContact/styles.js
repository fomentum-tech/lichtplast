import styled from "styled-components";

export const Form = styled.form`
  width: 58.33%;
  background: var(--cyan-dark);
  border-radius: 0 5px 5px 0;
  padding: 64px 59.5px;

  @media (max-width: 1120px) {
    width: 100%;
    border-radius: 0 0 5px 5px;
  }

  @media (max-width: 768px) {
    padding: 30px;
  }

  > div {
    label {
      margin-bottom: 16px;
      font-family: "Graphik";
      font-weight: 600;
      font-size: 18px;

      color: var(--white);
    }

    input,
    textarea {
      padding: 15px 16px;

      font-family: "Graphik";
      font-weight: 400;
      font-size: 18px;

      outline: none;
      background: none;
      border: 2px solid var(--white);
      border-radius: 2px;

      color: var(--cyan-lgt);

      &::placeholder {
        color: var(--cyan-lgt);
      }
    }

    button {
      width: 100%;

      display: flex;
      justify-content: center;

      padding: 15.4px 0;

      font-family: "Graphik";
      font-weight: 600;
      font-size: 18px;
      text-transform: uppercase;

      color: var(--blue);

      border: none;
      background: var(--white);
      box-shadow: 0px 4px 15px rgba(19, 26, 120, 0.2);
      border-radius: 2px;
    }

    span {
      font-family: "Graphik";
      font-weight: 400;
      margin-top: 5px;
      color: var(--cyan-lgt);
      font-size: 12px;
    }
  }
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }

  > div {
    width: 48%;
    display: flex;
    flex-direction: column;

    &:last-child {
      @media (max-width: 768px) {
        margin-top: 20px;
      }
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const FormMessage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 26px 0;

  textarea {
    resize: none;
    line-height: 18px;
  }
`;

export const MessageErrorForm = styled.p`
  margin-top: 20px;
  padding: 5px;
  border-radius: 2px;
  font-family: "Graphik";
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  color: ${(props) => props.color || "red"};
  background: var(--gray-bg);
`;

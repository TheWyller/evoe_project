import styled from "styled-components";
import { appearFromLeft } from "../../styles/global";

export const DivStyled = styled.div`
  animation: ${appearFromLeft} 1s;

  display: flex;
  flex-wrap: wrap;
  max-width: 400px;
  padding: 50px;
  justify-content: space-evenly;

  h1 {
    color: var(--Black-100);
    margin-bottom: 2rem;
  }
  label {
    margin-bottom: 1rem;
  }

  input {
    background: var(--White);
    box-shadow: inset 0px 1px 3px #00000029;
    border: 0.5px solid #a0a1a1;
    border-radius: 5px;
    opacity: 1;
  }
  span {
    margin-top: 0.5rem;
    color: red;
    font-weight: bold;
  }
  button {
    margin-top: 2rem;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  color: var(--Black-100);
`;

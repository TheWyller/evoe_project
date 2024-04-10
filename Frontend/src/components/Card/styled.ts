import styled from "styled-components";

export const Card = styled.section`
  background-color: var(--White);
  box-shadow: 0px 1px 3px #00000029;
  border: 0.5px solid #cfd0d0;
  border-radius: 5px;
  opacity: 1;
  width: fit-content;
  height: fit-content;
  @media (max-width: 375px) {
    width: 90%;
  }
`;

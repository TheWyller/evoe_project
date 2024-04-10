import styled from "styled-components";
import { appearFromLeft } from "../../styles/global";

export const Container = styled.div`
  animation: ${appearFromLeft} 1s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-right: 3rem;

  @media (max-width: 750px) {
    margin-right: unset;
    margin-bottom: 2rem;
  }
`;

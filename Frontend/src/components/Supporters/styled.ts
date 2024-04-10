import styled from "styled-components";
import { appearFromLeft } from "../../styles/global";

export const SectionStyled = styled.section`
  animation: ${appearFromLeft} 1s;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;

  min-height: 220px;
  max-width: 300px;

  padding: 1rem;

  .text {
    width: 100%;
    box-sizing: border-box;
  }
  h3 {
    width: 100%;
    text-align: center;
  }
  p {
    font-weight: bold;
    margin-bottom: 5px;

    span {
      font-style: italic;
      font-weight: 500;
      margin-left: 10px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`;

import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: rgb(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    overflow-y: scroll;
  }
`;

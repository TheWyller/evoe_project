import styled from "styled-components";

const ButtonStyled = styled.button`
  padding: 17px 36px;
  box-shadow: 0px 1px 3px #00000029;
  border: 1px solid #131414;
  border-radius: 10px;
  opacity: 1;

  color: var(--text-button-default);
  background: var(--Black-100);

  &:hover {
    background: var(--Black-80);
  }

  &.active {
    color: var(--text-button-active);
    background-color: var(--White);
    &:hover {
      background: var(--Black-20);
    }
  }
  &.disable {
    box-shadow: unset;
    border: 1px solid #cfd0d0;
    color: var(--text-button-disable);
    background-color: var(--Black-20);
  }

  @media (max-width: 375px) {
    padding: 8px 20px;
  }
`;

export default ButtonStyled;

import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-bottom: 15px;

  label {
    font-weight: 600;
  }

  input {
    height: 30px;
    border: solid var(--Grey-2) 2px;
    border-radius: 5px;
    width: 100%;
    padding-left: 5px;

    &:hover {
      border: solid var(--Blue-1) 2px;
      -webkit-appearance: none;
    }
  }
  span {
    color: var(--Negative);
    font-size: small;
    font-weight: bold;
  }
`;

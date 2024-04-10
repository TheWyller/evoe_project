import styled from "styled-components";
import { appearFromLeft } from "../../styles/global";

const HeaderStyled = styled.header`
  animation: ${appearFromLeft} 1s;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export default HeaderStyled;

import React from "react";
import { EvoeLogo } from "./EvoeLogo";
import HeaderStyled from "./styled";

export const Header = () => {
  return (
    <HeaderStyled>
      <EvoeLogo style={{ width: "70%", maxWidth: "300px" }} />
    </HeaderStyled>
  );
};

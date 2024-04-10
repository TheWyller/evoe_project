import React, { ReactNode } from "react";
import * as S from "./styled";

interface CardProps {
  children: ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return <S.Card>{children}</S.Card>;
};

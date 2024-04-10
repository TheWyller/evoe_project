import { IButtonProps } from "../../interfaces/react.interfaces";
import ButtonStyled from "./styled";

const Button: React.FC<IButtonProps> = ({ children, ...rest }) => {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
};

export default Button;

import { IInputProps } from "../../interfaces/react.interfaces";
import { InputContainer } from "./style";

export const Input: React.FC<IInputProps> = ({
  label,
  name,
  placeholder,
  error,
  register,
  ...rest
}) => {
  return (
    <InputContainer>
      <label>{label}</label>
      <input placeholder={placeholder} {...register(name)} {...rest} />
      {!!error && <span>{typeof error === "string" && error}</span>}
    </InputContainer>
  );
};

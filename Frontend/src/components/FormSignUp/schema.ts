import * as yup from "yup";

export const schemaInfos = yup.object().shape({
  firstName: yup.string().required("O primeiro nome é obrigatório"),
  lastName: yup.string().required("O ultimo nome é obrigatório"),
  email: yup
    .string()
    .email("O email precisa ser válido")
    .required("O email é obrigatório"),
  phone: yup
    .string()
    .required("O telefone é obrigatório")
    .min(10, "Mínimo de 10 digitos!"),
  password: yup
    .string()
    .required("Campo Obrigatório!")
    .min(8, "Mínimo de 8 digitos!"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Senhas devem ser iguais!")
    .required("Campo Obrigatório!"),
});

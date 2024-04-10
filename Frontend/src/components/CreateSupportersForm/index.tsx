import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaInfos } from "./schema";
import { DivStyled, FormStyled } from "../Form/style";
import { Input } from "../Input";
import Button from "../Button";
import { useContext } from "react";
import { CreateSupportersContext } from "../../contexts/CreateSupportersContext";
import { useNavigate } from "react-router-dom";

const CreateSupportersForm = () => {
  const navigate = useNavigate();
  const { setCreateSupportersData } = useContext(CreateSupportersContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaInfos) });

  const onSubmitFunction = (data: FieldValues) => {
    setCreateSupportersData(data);
  };

  return (
    <DivStyled>
      <h1>Criar Apoiador</h1>
      <FormStyled onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          name="firstName"
          type="text"
          label="Informe o primeiro nome"
          placeholder="Nome"
          register={register}
          error={errors.firstName?.message}
        />
        <Input
          name="lastName"
          type="text"
          label="Informe o ultimo nome"
          placeholder="Sobrenome"
          register={register}
          error={errors.lastName?.message}
        />
        <Input
          name="email"
          type="email"
          label="Informe o email"
          placeholder="exemplo@email.com"
          register={register}
          error={errors.email?.message}
        />
        <Input
          name="phone"
          type="text"
          label="Informe o telefone"
          placeholder="41912345678"
          register={register}
          error={errors.phone?.message}
        />
        <Button type="submit">Criar Apoiador</Button>
        <Button onClick={() => navigate("/", { replace: true })}>Voltar</Button>
      </FormStyled>
    </DivStyled>
  );
};

export default CreateSupportersForm;

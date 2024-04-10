import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormSignUp from "../components/FormSignUp";
import MainStyled from "../components/Main/styled";
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { Text } from "../components/Text/styled";
import { Container } from "../components/SignUp/styles";

const SignUp = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("@Evoe_project:Token");

  useEffect(() => {
    if (token) {
      navigate("/", { replace: true });
    }
  }, [navigate, token]);

  return (
    <MainStyled>
      <Container>
        <Header />
        <h3>Seja muito bem vindo !</h3>
        <Text>
          Cadastre-se e desfrute de uma vida sem preucupação salvando todos os
          seus apoiadores que você conquistou com muito espforço.
        </Text>
      </Container>
      <Card>
        <FormSignUp />
      </Card>
    </MainStyled>
  );
};

export default SignUp;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import FormLogin from "../components/FormLogin";
import HeaderStyled from "../components/Header/styled";
import MainStyled from "../components/Main/styled";
import { Header } from "../components/Header";
import { Card } from "../components/Card";

const Login = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("@Evoe_project:Token");

  useEffect(() => {
    if (token) {
      navigate("/", { replace: true });
    }
  }, [navigate, token]);

  return (
    <MainStyled>
      <Card>
        <Header />
        <FormLogin />
      </Card>
    </MainStyled>
  );
};

export default Login;

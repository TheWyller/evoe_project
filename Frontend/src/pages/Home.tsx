import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import HeaderStyled from "../components/Header/styled";

const Home = () => {
  const navigate = useNavigate();

  return (
    <HeaderStyled>
      <h1>Agenda Online</h1>
      <div>
        <Button
          className="default"
          onClick={() => navigate("/login", { replace: true })}
        >
          Login
        </Button>
        <Button
          className="default"
          onClick={() => navigate("/signup", { replace: true })}
        >
          Cadastrar
        </Button>
      </div>
    </HeaderStyled>
  );
};

export default Home;

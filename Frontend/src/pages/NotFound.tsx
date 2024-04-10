import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Página não encontrada</h1>
      <Button onClick={() => navigate("/", { replace: true })}>Voltar</Button>
    </>
  );
};

export default NotFound;

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../components/Button";
import Supporters from "../components/Supporters";
import EditSupportersForm from "../components/EditSupportersForm";
import { Modal } from "../components/Modal/style";

import {
  ButtonContainer,
  MySupportersStyled,
} from "../components/MySupporters/styled";
import { EditSupportersContext } from "../contexts/EditSupportersContext";
import { GetAllSupportersContext } from "../contexts/GetAllSupportersContext";
import { Card } from "../components/Card";
import { Header } from "../components/Header";

const MySupporters = () => {
  const navigate = useNavigate();
  const { setAllSupporters } = useContext(GetAllSupportersContext);
  const { isEdit } = useContext(EditSupportersContext);

  const token = localStorage.getItem("@Evoe_project:Token");

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [navigate, token]);

  function handleLogoutButton() {
    localStorage.clear();
    setAllSupporters([]);
    toast.success("Você saiu com sucesso!");
    navigate("/", { replace: true });
  }

  return (
    <>
      <Header />
      <ButtonContainer>
        <h1>Meus Apoiadores</h1>
        <Button onClick={() => navigate("/new-supporters", { replace: true })}>
          Criar novo Apoiador
        </Button>
        <Button onClick={handleLogoutButton}>Sair</Button>
      </ButtonContainer>

      <main>
        <Supporters />

        {isEdit && (
          <Modal>
            <Card>
              <EditSupportersForm />
            </Card>
          </Modal>
        )}
      </main>
    </>
  );
};

export default MySupporters;

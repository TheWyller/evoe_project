import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { EditSupportersContext } from "../../contexts/EditSupportersContext";
import { GetAllSupportersContext } from "../../contexts/GetAllSupportersContext";
import api from "../../services/api";
import Button from "../Button";

import { Container, SectionStyled } from "./styled";
import { MySupportersStyled } from "../MySupporters/styled";
import { Card } from "../Card";
import Pagination from "../Pagination";

const Supporters = () => {
  const { allSupporters, getAll, offset, totalPages, setOffset } = useContext(
    GetAllSupportersContext
  );
  const { setIdSupportersData, isEdit, setIsEdit } = useContext(
    EditSupportersContext
  );

  const [isDeleted, setIsDeleted] = useState(false);

  const token = localStorage.getItem("@Evoe_project:Token");

  useEffect(() => {
    getAll();
    setIsDeleted(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDeleted, isEdit, offset]);

  const deleteSupporters = (id: string) => {
    api
      .delete(`/supporters/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toast.success("Apoiador deletado com sucesso");
        getAll();
      })
      .catch((err) => toast.error("Algo aconteceu de errado!"));
  };

  return (
    <Container>
      <MySupportersStyled>
        {allSupporters?.map((elem, i) => (
          <Card>
            <SectionStyled key={elem.id}>
              <h3>Apoiador</h3>
              <section className="text">
                <p>
                  Nome:<span>{elem.firstName}</span>
                </p>
                <p>
                  Sobrenome:<span>{elem.lastName}</span>
                </p>
                <p>
                  Email:<span>{elem.email}</span>
                </p>
                <p>
                  Telefone:<span>{elem.phone}</span>
                </p>
              </section>
              <Button
                onClick={() => {
                  deleteSupporters(elem.id);
                  setIsDeleted(true);
                }}
              >
                Remove
              </Button>
              <Button
                onClick={() => {
                  setIsEdit(true);
                  setIdSupportersData(elem.id);
                }}
              >
                Editar
              </Button>
            </SectionStyled>
          </Card>
        ))}
      </MySupportersStyled>
      <Pagination
        currentPage={offset}
        onPageChange={setOffset}
        totalPages={totalPages}
      />
    </Container>
  );
};

export default Supporters;

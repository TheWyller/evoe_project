import { createContext, useState } from "react";
import { FieldValues } from "react-hook-form";

import { toast } from "react-toastify";

import { IEditSupporters } from "../interfaces/contexts.interfaces";
import { Ichildren } from "../interfaces/react.interfaces";

import api from "../services/api";

export const EditSupportersContext = createContext<IEditSupporters>(
  {} as IEditSupporters
);

export const EditSupportersProvider = ({ children }: Ichildren) => {
  const [idSupportersData, setIdSupportersData] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const token = localStorage.getItem("@Evoe_project:Token");

  const editSupporters = (id: string, data: FieldValues) => {
    api
      .patch(`/supporters/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toast.success("Apoiador editado com sucesso");
      })
      .catch((err) => toast.error("Apoiador NÃO foi editado!"));
  };

  return (
    <EditSupportersContext.Provider
      value={{
        idSupportersData,
        setIdSupportersData,
        editSupporters,
        isEdit,
        setIsEdit,
      }}
    >
      {children}
    </EditSupportersContext.Provider>
  );
};

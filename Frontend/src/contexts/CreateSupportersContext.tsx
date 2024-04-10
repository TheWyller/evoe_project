import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ICreateSupporters } from "../interfaces/contexts.interfaces";
import { Ichildren } from "../interfaces/react.interfaces";

import api from "../services/api";

export const CreateSupportersContext = createContext<ICreateSupporters>(
  {} as ICreateSupporters
);

export const CreateSupportersProvider = ({ children }: Ichildren) => {
  const navigate = useNavigate();

  const [CreateSupportersData, setCreateSupportersData] = useState({});

  const token = localStorage.getItem("@Evoe_project:Token");

  useEffect(() => {
    if (Object.keys(CreateSupportersData).length > 0) {
      api
        .post("/supporters", CreateSupportersData, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          toast.success("Apoiador criado com sucesso!");
          navigate("/", { replace: true });
          setCreateSupportersData({});
        })
        .catch((err) => toast.error("Apoiador não foi criado"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CreateSupportersData]);

  return (
    <CreateSupportersContext.Provider value={{ setCreateSupportersData }}>
      {children}
    </CreateSupportersContext.Provider>
  );
};

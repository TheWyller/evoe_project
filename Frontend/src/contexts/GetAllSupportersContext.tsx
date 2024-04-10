import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { ISupporters } from "../interfaces/supporters.interfaces";
import { IGetAllSupporters } from "../interfaces/contexts.interfaces";
import { Ichildren } from "../interfaces/react.interfaces";

import api from "../services/api";

export const GetAllSupportersContext = createContext<IGetAllSupporters>(
  {} as IGetAllSupporters
);

export const GetAllSupportersProvider = ({ children }: Ichildren) => {
  const [allSupporters, setAllSupporters] = useState([] as ISupporters[]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [limit, setLimit] = useState<number>(8);
  const [offset, setOffset] = useState<number>(0);

  function findTotalPages(totalItens: number, limit: number): number {
    return Math.ceil(totalItens / limit);
  }

  function handleLimit(value: number) {
    setLimit(value);
  }

  const getAll = () => {
    const token = localStorage.getItem("@Evoe_project:Token");

    if (token) {
      api
        .get("/supporters", {
          headers: { Authorization: `Bearer ${token}` },
          params: { limit, offset },
        })
        .then((res) => {
          setAllSupporters(res.data.supporters);
          setTotalPages(findTotalPages(res.data.total, limit));
        })
        .catch((err) => toast.error("Algo aconteceu de errado!"));
    }
  };

  return (
    <GetAllSupportersContext.Provider
      value={{
        allSupporters,
        totalPages,
        offset,
        setAllSupporters,
        handleLimit,
        getAll,
        setOffset,
      }}
    >
      {children}
    </GetAllSupportersContext.Provider>
  );
};

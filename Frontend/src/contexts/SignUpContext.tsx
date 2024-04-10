import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ISignUp } from "../interfaces/contexts.interfaces";
import { Ichildren } from "../interfaces/react.interfaces";

import api from "../services/api";

export const SignUpContext = createContext<ISignUp>({} as ISignUp);

export const SignUpProvider = ({ children }: Ichildren) => {
  const navigate = useNavigate();

  const [signUpData, setSignUpData] = useState({});

  useEffect(() => {
    if (Object.keys(signUpData).length > 0) {
      api
        .post("/users", signUpData)
        .then((res) => {
          toast.success("Cadastro realizado com sucesso!");
          navigate("/login", { replace: true });
          setSignUpData({});
        })
        .catch((err) => toast.error("Cadastro não foi realizado"));
    }
  }, [navigate, signUpData]);

  return (
    <SignUpContext.Provider value={{ setSignUpData }}>
      {children}
    </SignUpContext.Provider>
  );
};

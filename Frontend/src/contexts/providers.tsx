import React from "react";
import { Ichildren } from "../interfaces/react.interfaces";
import { CreateSupportersProvider } from "./CreateSupportersContext";
import { EditSupportersProvider } from "./EditSupportersContext";
import { GetAllSupportersProvider } from "./GetAllSupportersContext";
import { LoginProvider } from "./LoginContext";
import { SignUpProvider } from "./SignUpContext";

const Providers = ({ children }: Ichildren) => {
  return (
    <GetAllSupportersProvider>
      <LoginProvider>
        <SignUpProvider>
          <CreateSupportersProvider>
            <EditSupportersProvider>{children}</EditSupportersProvider>
          </CreateSupportersProvider>
        </SignUpProvider>
      </LoginProvider>
    </GetAllSupportersProvider>
  );
};

export default Providers;

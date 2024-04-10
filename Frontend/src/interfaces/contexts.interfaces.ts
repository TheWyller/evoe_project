import { FieldValues } from "react-hook-form";
import { ISupporters } from "./supporters.interfaces";

export interface ILogin {
  authenticated: boolean;
  setLoginData: React.Dispatch<React.SetStateAction<{}>>;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ISignUp {
  setSignUpData: React.Dispatch<React.SetStateAction<{}>>;
}

export interface IGetAllSupporters {
  offset: number;
  totalPages: number;
  allSupporters: ISupporters[];
  getAll: () => void;
  handleLimit: (value: number) => void;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  setAllSupporters: React.Dispatch<React.SetStateAction<ISupporters[]>>;
}
export interface ICreateSupporters {
  setCreateSupportersData: React.Dispatch<React.SetStateAction<{}>>;
}

export interface IEditSupporters {
  isEdit: boolean;
  idSupportersData: string;
  editSupporters: (id: string, data: FieldValues) => void;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setIdSupportersData: React.Dispatch<React.SetStateAction<string>>;
}

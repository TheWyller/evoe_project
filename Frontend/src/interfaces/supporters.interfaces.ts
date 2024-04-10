export interface ISupporters {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  created_at: Date;
  updated_at: Date;
}

export interface IEditSupporters {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

export interface ISupportersList {
  allContacts: ISupporters[];
}

export type EditProps = {
  setIsEdit: (val: boolean) => void;
};

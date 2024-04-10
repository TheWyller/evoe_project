export interface ISupportersRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface ISupportersGetRequest {
  offset: number;
  limit: number;
}

export interface ISupportersCreated extends ISupportersRequest {
  id?: string;
  created_at: Date;
  updated_at: Date;
}

export interface ISupportersUpdate {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
}

import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  ISupportersGetRequest,
  ISupportersRequest,
} from "../interfaces/supporters";

const supportersSchema: SchemaOf<ISupportersRequest> = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup
    .string()
    .min(10, "O Telefone deve conter no mínimo 8 digitos mais o DDD")
    .required(),
});

const supportersGetSchema: SchemaOf<ISupportersGetRequest> = yup
  .object()
  .shape({
    limit: yup.number().required(),
    offset: yup.number().required(),
  });

export { supportersSchema, supportersGetSchema };

import { FieldValues } from "react-hook-form";

export const checkInfos = (obj: FieldValues) => {
  const newData = {} as FieldValues;

  for (const key in obj) {
    if (obj[key].length !== 0) {
      newData[key] = obj[key];
    }
  }
  return newData;
};

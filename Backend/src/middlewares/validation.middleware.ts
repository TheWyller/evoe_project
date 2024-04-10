import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";

const isObjectEmpty = (objectName: Object) => {
  return Object.keys(objectName).length === 0;
};

const validationMiddleware =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    console.log({ "isObjectEmpty(req.body)": isObjectEmpty(req.body) });
    try {
      const userData = isObjectEmpty(req.body) ? req.query : req.body;

      const validatedData = await schema.validate(userData);
      req.body = validatedData;
      next();
    } catch (error: any) {
      return res.status(400).json({
        error: error.errors?.join(", "),
      });
    }
  };

export default validationMiddleware;

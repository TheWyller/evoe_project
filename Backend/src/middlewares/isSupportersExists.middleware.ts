import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Supporters } from "../entities/supporters.entity";

export const isSupportersExistsMiddle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const supportersRepository = AppDataSource.getRepository(Supporters);
    const supporters = await supportersRepository.findOneBy({ id });

    if (!supporters) {
      return res.status(404).json({ message: "Supporters not exist" });
    } else {
      next();
    }
  } catch (error) {
    return res.status(401).json({ message: "Supporters not exist" });
  }
};

export default isSupportersExistsMiddle;

import { Request, Response } from "express";
import supportersListOneServices from "../../services/supporters/supportersListOne.services";

const supportersListOneController = async (
  request: Request,
  response: Response
) => {
  try {
    const id = request.params.id;
    const supporters = await supportersListOneServices(id);
    return response.status(200).json(supporters);
  } catch (error) {
    if (error instanceof Error) {
      return response.status(401).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default supportersListOneController;

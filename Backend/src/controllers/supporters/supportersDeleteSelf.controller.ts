import { Request, Response } from "express";
import supportersDeleteSelfServices from "../../services/supporters/supportersDeleteSelf.services";

const supportersDeleteSelfController = async (
  request: Request,
  response: Response
) => {
  try {
    const id = request.params.id;
    await supportersDeleteSelfServices(id);
    return response.status(200).json();
  } catch (error) {
    if (error instanceof Error) {
      return response.status(401).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default supportersDeleteSelfController;

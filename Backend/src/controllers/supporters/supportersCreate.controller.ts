import { Response, Request } from "express";
import supportersCreateService from "../../services/supporters/supportersCreate.services";

const supportersCreateControllers = async (
  request: Request,
  response: Response
) => {
  try {
    const userData = request.body;
    const userId = request.userId;
    const newSupporters = await supportersCreateService(userData, userId);
    return response.status(201).json(newSupporters);
  } catch (error) {
    if (error instanceof Error) {
      return response.status(400).json({ error: error.message });
    }
  }
};

export default supportersCreateControllers;

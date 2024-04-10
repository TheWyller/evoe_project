import { Response, Request } from "express";
import supportersListService from "../../services/supporters/supportersList.services";

const supportersListControllers = async (
  request: Request,
  response: Response
) => {
  try {
    const userId = request.userId;
    const { limit, offset } = request.query;

    const parsedLimit = parseInt(limit as string);
    const parsedOffset = parseInt(offset as string);

    const listSupporters = await supportersListService({
      userId,
      limit: parsedLimit,
      offset: parsedOffset,
    });
    return response.json(listSupporters);
  } catch (error) {
    if (error instanceof Error) {
      return response.status(401).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default supportersListControllers;

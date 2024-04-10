import { Request, Response } from "express";
import supportersUpdateServices from "../../services/supporters/supportersUpdate.services";

const supportersUpdateController = async (
  request: Request,
  response: Response
) => {
  try {
    const id = request.params.id;
    const { firstName, lastName, email, phone } = request.body;
    const updatedSupporters = await supportersUpdateServices(
      { firstName, lastName, email, phone },
      id
    );
    return response
      .status(200)
      .json({ message: "Supporters updated", userdata: updatedSupporters });
  } catch (error) {
    if (error instanceof Error) {
      return response.status(401).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default supportersUpdateController;

import { Router } from "express";
import supportersCreateControllers from "../controllers/supporters/supportersCreate.controller";
import supportersDeleteSelfController from "../controllers/supporters/supportersDeleteSelf.controller";
import supportersListControllers from "../controllers/supporters/supportersList.controllers";
import supportersListOneController from "../controllers/supporters/supportersListOne.controller";
import supportersUpdateController from "../controllers/supporters/supportersUpdate.controller";

import authUserMiddle from "../middlewares/authUser.middleware";
import isSupportersExistsMiddle from "../middlewares/isSupportersExists.middleware";
import validationMiddleware from "../middlewares/validation.middleware";
import {
  supportersGetSchema,
  supportersSchema,
} from "../schemas/supporters.schemas";
import isSupportersOwnMiddle from "../middlewares/isSupportersOwn.middleware";

const routes = Router();

routes.post(
  "",
  authUserMiddle,
  validationMiddleware(supportersSchema),
  supportersCreateControllers
);
routes.get(
  "",
  validationMiddleware(supportersGetSchema),
  authUserMiddle,
  supportersListControllers
);
routes.get(
  "/:id",
  authUserMiddle,
  isSupportersExistsMiddle,
  isSupportersOwnMiddle,
  supportersListOneController
);
routes.delete(
  "/:id",
  authUserMiddle,
  isSupportersExistsMiddle,
  isSupportersOwnMiddle,
  supportersDeleteSelfController
);
routes.patch(
  "/:id",
  authUserMiddle,
  isSupportersExistsMiddle,
  isSupportersOwnMiddle,
  supportersUpdateController
);

export default routes;

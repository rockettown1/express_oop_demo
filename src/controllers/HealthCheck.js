import _Controller from "../lib/Controller.js";
import CustomError from "../lib/CustomError.js";
import { HttpStatusCode, Errors } from "../lib/constants/error_list.js";
import { authHandler } from "../middleware/index.js";
import { lowdbService } from "../services/LowdbService.js";

export default class HealthCheckController extends _Controller {
  path = "/api";
  routes = [
    {
      path: "/health",
      method: "GET",
      handler: this.check_api,
      localMiddleware: [authHandler],
    },
  ];

  constructor() {
    super();
  }

  async check_api(_, res, next) {
    try {
      res.status(200).send({ message: "Everything looks OK to me!" });
    } catch (error) {
      next(error);
    }
  }
}

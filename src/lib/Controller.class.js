import { Router } from "express";
import CustomError from "./CustomError.class.js";
import { Errors } from "./error_list.js";

//do not instantiate (would be abstract in Typescript)
export default class _Controller {
  router = Router();
  path;
  routes = [];

  setRoutes() {
    for (const route of this.routes) {
      switch (route.method) {
        case "GET":
          this.router.get(route.path, route.handler);
          break;
        case "POST":
          this.router.post(route.path, route.handler);
          break;
        case "PUT":
          this.router.put(route.path, route.handler);
          break;
        case "DELETE":
          this.router.delete(route.path, route.handler);
          break;
        default:
        //need to set up custom error handling
      }
    }
    return this.router;
  }
}

import _Controller from "../lib/Controller.js";
import { authHandler } from "../middleware/index.js";
import { lowdbService } from "../services/LowdbService.js";

export default class UserController extends _Controller {
  path = "/api";
  routes = [
    {
      path: "/users",
      method: "GET",
      handler: this.getUsers,
      localMiddleware: [authHandler],
    },
    {
      path: "/user",
      method: "POST",
      handler: this.addUser,
      localMiddleware: [],
    },
  ];

  constructor() {
    super();
  }

  async getUsers(req, res, next) {
    res.status(200).send({ message: "You fetched all the users" });
  }

  async addUser(req, res) {
    res.status(201).send({ message: "You successfully added a user" });
  }
}

import _Controller from "../lib/classes/Controller.js";

export default class UserController extends _Controller {
  path = "/api";
  routes = [
    {
      path: "/users",
      method: "GET",
      handler: this.getUsers,
      localMiddleware: [],
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
    res.status(200).send({ message: "You successfully added a user" });
  }
}

import _Controller from "../lib/controller.class.js";

export default class HealthCheck extends _Controller {
  path = "";
  routes = [
    {
      path: "/health",
      method: "GET",
      handler: this.check_api,
      localMiddleware: [],
    },
  ];

  constructor() {
    super();
  }

  async check_api(_, res) {
    try {
      res.status(200).send({ message: "Everything looks OK to me!" });
    } catch (error) {
      //throw custom error eventually
      console.log(error);
    }
  }
}
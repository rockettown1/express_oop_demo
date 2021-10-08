import { logs } from "./constants/logging.js";
import { errorHandler } from "./ErrorHandler.js";

export default class Server {
  #app;
  #port;
  constructor(app, port) {
    this.#app = app;
    this.#port = port;
  }

  loadMiddleware(middleware) {
    try {
      middleware.forEach((mw) => {
        this.#app.use(mw);
      });
      console.log(logs.mw_success);
    } catch (error) {
      console.log(logs.mw_fail);
    }
  }

  loadControllers(controllers) {
    try {
      controllers.forEach((controller) => {
        this.#app.use(controller.path, controller.setRoutes());
      });
      console.log(logs.ctr_success);
    } catch (error) {
      console.log(logs.ctr_fail);
      errorHandler.handleFatal(error);
    }
  }

  async connectToDatabase(databaseServices) {
    try {
      databaseServices.forEach(async (service) => {
        await service.connect();
      });
    } catch (error) {
      console.log(error);
    }
  }

  run() {
    return this.#app.listen(this.#port, () => {
      console.log(`${logs.listening(this.#port)}`);
    });
  }
}

export default class Server {
  #app;
  #port;
  constructor(app, port) {
    this.#app = app;
    this.#port = port;
  }

  loadMiddleware(middleware) {
    middleware.forEach((mw) => {
      this.#app.use(mw);
    });
    console.log("Middleware has been loaded");
  }

  loadControllers(controllers) {
    controllers.forEach((controller) => {
      this.#app.use(controller.path, controller.setRoutes());
    });
    console.log("Controllers have been loaded");
  }

  run() {
    return this.#app.listen(this.#port, () => {
      console.log(`Server is listening on port ${this.#port}`);
    });
  }
}

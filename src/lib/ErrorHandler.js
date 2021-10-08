import { logger } from "../services/Logger.js";

class ErrorHandler {
  async handleError(err) {
    logger.error(
      "Error message from the centralized error-handling component",
      err
    );
  }

  async handleDebug(err) {
    logger.debug("Something went wrong", err);
  }
  async handleFatal(err) {
    await logger.fatal("Something very went wrong", err);
    console.log("Server was unable to start because of the above error");
    process.exit(1);
  }
}

export const errorHandler = new ErrorHandler();

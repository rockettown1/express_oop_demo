import { logger } from "./Logger.js";

class ErrorHandler {
  async handleError(err) {
    logger.error(
      "Error message from the centralized error-handling component",
      err
    );
  }
}

export const errorHandler = new ErrorHandler();

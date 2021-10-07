import { errorHandler } from "../lib/ErrorHandler.js";

export const customErrorHandler = async (err, req, res, next) => {
  await errorHandler.handleError(err);
};

import { errorHandler } from "../lib/ErrorHandler.js";

const customErrorHandler = async (err, req, res, next) => {
  await errorHandler.handleError(err);
};

export default customErrorHandler;

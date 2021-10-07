export default class CustomError extends Error {
  constructor(message, name, httpCode) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = name;
    this.httpCode = httpCode;
  }
}

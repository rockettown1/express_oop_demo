import express from "express";
import cors from "cors";
import "dotenv/config";
import Server from "./lib/Server.js";
import { customErrorHandler } from "./middleware/index.js";
import {
  HealthCheckController,
  UsersController,
  BooksController,
} from "./controllers/index.js";
import MongooseService from "./services/MongooseService.js";
import { lowdbService } from "./services/LowdbService.js";

const server = new Server(express(), process.env.PORT);

//list controllers, middleware and databases here
const controllers = [
  new HealthCheckController(),
  new UsersController(),
  new BooksController(),
];
const middleware = [express.json(), cors(), customErrorHandler];
const databases = [MongooseService, lowdbService];

server.loadControllers(controllers);
server.loadMiddleware(middleware);
server.connectToDatabase(databases);
server.run();

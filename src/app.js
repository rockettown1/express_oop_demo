import express from "express";
import cors from "cors";
import "dotenv/config";
import Server from "./lib/classes/Server.js";
import { customErrorHandler } from "./middleware/errorHandler.js";
import {
  HealthCheckController,
  UsersController,
} from "./controllers/_index.js";

const server = new Server(express(), process.env.PORT);

//register controllers
server.loadControllers([new HealthCheckController(), new UsersController()]);
//register global middleware
server.loadMiddleware([express.json(), cors(), customErrorHandler]);
server.run();

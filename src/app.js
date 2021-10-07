import express from "express";
import cors from "cors";
import "dotenv/config";
import Server from "./lib/Server.class.js";
import HealthCheck from "./controllers/Health.class.js";
import Users from "./controllers/Users.class.js";

const server = new Server(express(), process.env.PORT);

//register global middleware
server.loadMiddleware([express.json(), cors()]);
//register controllers
server.loadControllers([new HealthCheck(), new Users()]);
server.run();

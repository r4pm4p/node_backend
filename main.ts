import { FastifyInstance } from "fastify";
import { Router } from "./src/infrastructure/router/Router";
import Migration from "./src/infrastructure/database/Migrations";
require("dotenv").config();

const fastify: FastifyInstance = require("fastify")({ logger: true });

Migration.sync()

const router: Router = new Router(fastify);
router.start();

fastify.listen({
  port: process.env.APP_PORT as number | undefined,
  host: process.env.APP_HOST
});

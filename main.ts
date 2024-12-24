import { FastifyInstance } from "fastify";
import { Router } from "./src/presentation/router/Router";
require("dotenv").config();

const fastify: FastifyInstance = require("fastify")({ logger: true });

const router: Router = new Router(fastify);
router.start();

fastify.listen({
  port: process.env.APP_PORT as number | undefined,
  host: process.env.APP_HOST
});

import { FastifyInstance } from "fastify";
import { Router } from "./src/presentation/router/router";
require("dotenv").config();

const fastify: FastifyInstance = require("fastify")({ logger: true });

const router: Router = new Router(fastify);
router.start();

fastify.listen({
  port: process.env.PORT as number | undefined,
});

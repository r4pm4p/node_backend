import { FastifyInstance } from "fastify";
import { UserRouterGateway } from "../routes/user_router_gateway";
import { UserController } from "../controllers/user_controller";

export class Router {
  constructor(private server: FastifyInstance) {}

  public start = () => {
    /**
     * @description instance from user basic routes
     * @active true
     */
    this.server.register(new UserRouterGateway(new UserController()).routes, {
      prefix: "/user",
    });
  };
}

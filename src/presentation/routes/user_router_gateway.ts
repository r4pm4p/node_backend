import { FastifyInstance } from "fastify";
import { UserController } from "../controllers/user_controller";

export class UserRouterGateway {
  private user_controller: UserController;

  constructor(user_controller: UserController) {
    this.user_controller = user_controller;
  }

  public routes = async (server: FastifyInstance, options: Object) => {
    server.get("/", this.user_controller.index);
    server.post("/", this.user_controller.store);
  };
}

import { FastifyInstance } from "fastify";
import { UserController } from "../controllers/UserController";
import LoginController from "../controllers/LoginController";
import Auth from "../Middleware/Auth";

export class Router {
  constructor(private server: FastifyInstance) { }

  public start = () => {

    this.server.post("/login", new LoginController().login);

    this.server.get("/show/users/all", {
      preHandler: [Auth.admin]
    }, new UserController().getAllUsers);

    this.server.post("/register/user", new UserController().registerNewUser);

    this.server.post("/register/mc", {
      preHandler: [Auth.login]
    }, () => null);

    this.server.post("/register/owner", {
      preHandler: [Auth.login]
    }, () => null);

    this.server.post("/confirm/presence/:eventId", {
    }, () => null)

    this.server.get("/show/all/battle", {
    }, () => null);
    this.server.get("/show/all/event", {
    }, () => null);

    this.server.post("/follow/mc/:mcId", {
      preHandler: [Auth.login]
    }, () => null);
    this.server.post("/follow/battle/:battleId", {
      preHandler: [Auth.login]
    }, () => null);

    this.server.post("/register/battle", {
      preHandler: [Auth.owner]
    }, () => null);

    this.server.post("/register/event", {
      preHandler: [Auth.owner]
    }, () => null);

    this.server.post("/add/event/:eventId/podium", {
      preHandler: [Auth.owner]
    }, () => null);

    this.server.put("/update/battle/:battleId/profile", {
      preHandler: [Auth.owner]
    }, () => null);

    this.server.put("/update/event/:battleId/profile", {
      preHandler: [Auth.owner]
    }, () => null);

    this.server.post("/participate/event/:eventId", {
      preHandler: [Auth.mc]
    }, () => null);

    this.server.put("/update/mc/:mcId/profile", {
      preHandler: [Auth.mc]
    }, () => null);

    this.server.post("/register/new/mob", {
      preHandler: [Auth.mobowner]
    }, () => null);

    this.server.post("/add/mob/:mobId/mc", {
      preHandler: [Auth.mobowner]
    }, () => null);


  };
}

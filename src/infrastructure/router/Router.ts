import { FastifyInstance } from "fastify";
import UserController from "../../application/controllers/UserController";
import LoginController from "../../application/controllers/LoginController";
import Auth from "../../application/middleware/Auth";
import McController from "../../application/controllers/McController";
import loginRequest from "../../application/request/loginRequest";
import createMcRequest from "../../application/request/createMcRequest";

export class Router {
  constructor(private server: FastifyInstance) { }

  public start = () => {

    this.server.post("/login", {
      schema: loginRequest
    }, new LoginController().login);

    this.server.get("/show/users/all", {
      preHandler: [Auth.admin]
    }, new UserController().getAllUsers);

    this.server.get("/show/user/login/:id/history", {
      preHandler: [Auth.admin],
    }, new LoginController().getUserLoginHistory);

    this.server.post("/register/user", new UserController().registerNewUser);

    this.server.post("/register/mc", {
      preHandler: [Auth.login],
      schema: createMcRequest
    }, new McController().registerNewMc);

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

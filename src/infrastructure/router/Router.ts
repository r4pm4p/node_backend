import { FastifyInstance } from "fastify";
import UserController from "../../application/controllers/UserController";
import LoginController from "../../application/controllers/LoginController";
import Auth from "../../application/middleware/Auth";
import McController from "../../application/controllers/McController";
import loginRequest from "../../application/request/LoginRequest";
import createMcRequest from "../../application/request/CreateMcRequest";
import createOwnerRequest from "../../application/request/CreateOwnerRequest";
import OwnerController from "../../application/controllers/OwnerController";
import AdminController from "../../application/controllers/AdminController";
import createAdminRequest from "../../application/request/CreateAdminRequest";
import createBattleRequest from "../../application/request/CreateBattleRequets";
import BattleController from "../../application/controllers/BattleController";
import EventController from "../../application/controllers/EventController";
import createEventRequest from "../../application/request/CreateEventRequest";
import FollowersController from "../../application/controllers/FollowersController";

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
      preHandler: [Auth.login],
      schema: createOwnerRequest
    }, new OwnerController().registerNewOwner);

    this.server.post("/register/admin", {
      preHandler: [Auth.admin],
      schema: createAdminRequest
    }, new AdminController().registerNewAdmin);

    this.server.post("/register/battle", {
      preHandler: [Auth.owner],
      schema: createBattleRequest
    }, new BattleController().registerNewBattle);

    this.server.get("/show/all/battle", {
    }, new BattleController().getAllBattles);

    this.server.post("/register/event", {
      preHandler: [Auth.owner],
      schema: createEventRequest
    }, new EventController().registerNewEvent);

    this.server.get("/show/all/event", {
      preHandler: [Auth.login]
    }, new EventController().getAllEvents);

    this.server.post("/follow/mc/:mcId", {
      preHandler: [Auth.login]
    }, new FollowersController().followMc);

    this.server.post("/follow/battle/:battleId", {
      preHandler: [Auth.login]
    }, new FollowersController().followBattle);

    this.server.post("/confirm/presence/:eventId", {
      preHandler: [Auth.login]
    }, new EventController().userConfirmPresence)

    this.server.post("/presence/event/:eventId", {
      preHandler: [Auth.mc]
    }, new McController().askPresenceOnEvent);

    this.server.post("/presence/confirm/:eventId", {
      preHandler: [Auth.owner]
    }, new OwnerController().confirmMcPresence);

    this.server.get("/presence/mc/:eventId", {
      preHandler: [Auth.owner]
    }, new OwnerController().getAllPresenceRequest);

    // DIVIDER

    this.server.post("/add/event/:eventId/podium", {
      preHandler: [Auth.owner]
    }, () => null);

    this.server.put("/update/battle/:battleId/profile", {
      preHandler: [Auth.owner]
    }, () => null);

    this.server.put("/update/event/:battleId/profile", {
      preHandler: [Auth.owner]
    }, () => null);

    this.server.put("/update/mc/:mcId/profile", {
      preHandler: [Auth.mc]
    }, () => null);


  };
}

import { FastifyInstance } from "fastify";
import { UserController } from "../controllers/user_controller";

export class Router {
  constructor(private server: FastifyInstance) { }

  public start = () => {

    this.server.get("/show/users/all", new UserController().getAllUsers); // root

    this.server.post("/register/user", new UserController().registerNewUser); // any
    this.server.post("/register/mc", () => null); // user
    this.server.post("/register/owner", () => null); // user 

    this.server.post("/confirm/presence/:eventId", () => null) // user

    this.server.post("/login", () => null); // user

    this.server.get("/show/all/battle", () => null); // user
    this.server.get("/show/all/event", () => null); // user

    this.server.post("/follow/mc/:mcId", () => null); // user
    this.server.post("/follow/battle/:battleId", () => null); // user

    this.server.post("/register/battle", () => null); //owner
    this.server.post("/register/event", () => null); // owner

    this.server.post("/add/event/:eventId/podium", () => null); // owner

    this.server.put("/update/battle/:battleId/profile", () => null); // owner
    this.server.put("/update/event/:battleId/profile", () => null); // owner

    this.server.post("/participate/event/:eventId", () => null); // mc
    this.server.put("/update/mc/:mcId/profile", () => null); // mc

    this.server.post("/register/new/mob", () => null); // mc - owner mob
    this.server.post("/add/mob/:mobId/mc", () => null); // mc - owner mob


  };
}

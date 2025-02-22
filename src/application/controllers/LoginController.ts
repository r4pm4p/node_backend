import { FastifyReply, FastifyRequest } from "fastify";
import LoginServices from "../../application/services/LoginServices";
import Jwt from "../../application/Facades/Jwt";

export default class LoginController {
  private loginServices: LoginServices;

  constructor() {
    this.loginServices = new LoginServices();
  }

  public login = async (request: FastifyRequest, reply: FastifyReply) => {
    const data = request.body as any;

    const authUser = await this.loginServices.auth(data.email, data.password);

    if (!authUser)
      return reply.code(401).send({
        status: 401,
        message: "User not Authorized",
        content: "",
      });

    await this.loginServices.saveOnHistory();

    return reply.code(200).send({
      status: 200,
      message: "Login confirmed",
      content: {
        token: Jwt.make(authUser),
      },
    });
  };

  public getUserLoginHistory = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
      const { id } = request.params as any;

      const userLoginHistory = await this.loginServices.getUserLoginHistory(id);

      reply.code(200).send({
        status: 200,
        message: "Login history has been retrieved",
        content: userLoginHistory,
      });
    } catch (error) {
      reply.send(error);
    }
  };
}

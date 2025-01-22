import { FastifyReply, FastifyRequest } from "fastify";
import Controller from "../interfaces/Controller";
import User from "../../domain/entities/User";
import UserRepositoryImplementation from "../../infrastructure/repository/UserRepositoryImplementation";
import ModelRepository from "../../domain/repository/ModelRepository";
import LoginServices from "../services/LoginServices";
import Jwt from "../Facades/Jwt";

export default class UserController implements Controller {
  modelRepository: ModelRepository;

  constructor() {
    this.modelRepository = new UserRepositoryImplementation();
  }

  public getAllUsers = async (
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<FastifyReply> => {
    const userData = await this.modelRepository.findAll();

    return reply.send(userData);
  };

  public registerNewUser = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
      const data = request.body as any;

      const user: User = new User(data.name, data.email, data.password);

      await this.modelRepository.save(user);

      return reply.send({
        code: 200,
        message: "Data is stored",
      });
    } catch (e) {
      return reply.send(e);
    }
  };

  public registerNewGoogleUser = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
      const data = request.body as any;
      const user: User = new User(
        data.name,
        data.email,
        data.email,
        true,
        true
      );

      const loginServices = new LoginServices();
      let authUser = await loginServices.auth(data.email, data.email);

      if (!authUser) await this.modelRepository.save(user);

      authUser = await loginServices.auth(data.email, data.email);

      if (!authUser)
        return reply.code(401).send({
          status: 401,
          message: "User not Authorized",
          content: "",
        });

      await loginServices.saveOnHistory();

      return reply.code(200).send({
        status: 200,
        message: "Login confirmed",
        content: {
          token: Jwt.make(authUser),
        },
      });
    } catch (e) {
      return reply.send(e);
    }
  };
}

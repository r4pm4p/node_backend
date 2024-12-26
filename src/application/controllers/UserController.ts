import { FastifyReply, FastifyRequest } from "fastify";
import { Controller } from "../interfaces/Controller";
import { User } from "../../domain/entities/User";
import { UserRepositoryImplementation } from "../../infrastructure/repository/UserRepositoryImplementation";

export class UserController implements Controller {
  private userRepository: UserRepositoryImplementation;

  constructor() {
    this.userRepository = new UserRepositoryImplementation();
  }

  public getAllUsers = async (
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<FastifyReply> => {

    const userData: Array<User> = await this.userRepository.findAll();

    return reply.send(userData)

  };

  public registerNewUser = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {

    try {

      const data = request.body as any;

      const user: User = new User(
        data.id,
        data.name,
        data.email,
        data.password
      );

      await this.userRepository.save(user)

      return reply.send({
        "code": 200,
        "message": "Data is stored"
      });
    } catch (e) {
      return reply.send(e)
    }
  };
}

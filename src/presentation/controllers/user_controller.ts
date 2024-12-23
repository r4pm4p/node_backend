import { FastifyReply, FastifyRequest } from "fastify";
import { Controller } from "../interfaces/controller";
import { Response } from "../helpers/response";
import { User } from "../../domain/entities/User";
import { ResponseCode } from "../enums/response_code_enum";

export class UserController implements Controller {
  private response_handler: Response<User>;

  constructor() {
    this.response_handler = new Response();
  }

  public index = async (
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<FastifyReply> => {
    return await this.response_handler.success(reply, ResponseCode.Ok, {
      messageCode: "data-retrieve-success",
      body: {
        data: "fabriciobruno",
      },
    });
  };

  public store = async (
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<FastifyReply> => {
    return await this.response_handler.success(reply, ResponseCode.Ok, {
      messageCode: "data-retrieve-success",
      body: {
        data: "sskrfsdfr",
      },
    });
  };
}

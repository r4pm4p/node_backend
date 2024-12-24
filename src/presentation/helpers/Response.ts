import { FastifyReply } from "fastify";
import { ResponseData } from "../interfaces/ResponseData";
import { ResponseCode } from "../enums/ResponseCode";

export class Response<T> {
  public success = async (
    reply: FastifyReply,
    code: ResponseCode,
    data: ResponseData<T>
  ) => {
    return reply.code(code).send(data);
  };
}

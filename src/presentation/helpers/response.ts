import { FastifyReply } from "fastify";
import { ResponseData } from "../interfaces/response_data";
import { ResponseCode } from "../enums/response_code_enum";

export class Response<T> {
  public success = async (
    reply: FastifyReply,
    code: ResponseCode,
    data: ResponseData<T>
  ) => {
    return reply.code(code).send(data);
  };
}

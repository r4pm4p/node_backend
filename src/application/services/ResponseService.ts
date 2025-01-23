import { FastifyReply } from "fastify";

export default class ResponseService {

  static reply: FastifyReply;

  static send = (code: number, message: string, content: any) => {};
}

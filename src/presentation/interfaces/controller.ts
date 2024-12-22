import { FastifyReply, FastifyRequest } from "fastify";

export interface Controller {
  index(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply>;
  store(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply>;
  //   show(): Promise<void>;
  //   update(): Promise<void>;
  //   delete(): Promise<void>;
}

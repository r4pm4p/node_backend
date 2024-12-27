import ModelRepository from "../../domain/repository/ModelRepository";

export default interface Controller {

  modelRepository: ModelRepository;

  // index(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply>;
  // store(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply>;
  //   show(): Promise<void>;
  //   update(): Promise<void>;
  //   delete(): Promise<void>;
}

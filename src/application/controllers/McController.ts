import { FastifyReply, FastifyRequest } from "fastify";
import Controller from "../interfaces/Controller";
import Mc from "../../domain/entities/Mc";
import McRepositoryImplementation from "../../infrastructure/repository/McRepositoryImplementation";
import ModelRepository from "../../domain/repository/ModelRepository";

export default class McController implements Controller {

    modelRepository: ModelRepository;

    constructor() {
        this.modelRepository = new McRepositoryImplementation()
    }

    public registerNewMc = async (request: FastifyRequest, reply: FastifyReply) => {
        try {

            const data = request.body as any
            const mc = new Mc(data.id, data.streetname)

            await this.modelRepository.save(mc)

        } catch (e) {
            reply.send(e)
        }

    }

}
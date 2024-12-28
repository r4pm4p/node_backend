import { FastifyReply, FastifyRequest } from "fastify";
import Controller from "../interfaces/Controller";
import ModelRepository from "../../domain/repository/ModelRepository";
import Owner from "../../domain/entities/Owner";
import OwnerRepositoryImplementation from "../../infrastructure/repository/OwnerRepositoryImplementation";

export default class OwnerController implements Controller {

    modelRepository: ModelRepository;

    constructor() {
        this.modelRepository = new OwnerRepositoryImplementation()
    }

    public getAllOwners = async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const owners = await this.modelRepository.findAll();

            reply.code(200).send({
                "status": 200,
                "message": "User has turned to Mc",
                "content": owners
            })
        } catch (e) {
            reply.send(e)
        }
    }

    public registerNewOwner = async (request: FastifyRequest, reply: FastifyReply) => {
        try {

            const data = request.body as any
            const owner = new Owner(data.user_id)

            await this.modelRepository.save(owner)

            reply.code(200).send({
                "status": 200,
                "message": "User has turned to Owner",
                "content": owner
            })
        } catch (e) {
            reply.send(e)
        }

    }

}
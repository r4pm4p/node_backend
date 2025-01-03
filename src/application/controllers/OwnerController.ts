import { FastifyReply, FastifyRequest } from "fastify";
import Controller from "../interfaces/Controller";
import ModelRepository from "../../domain/repository/ModelRepository";
import Owner from "../../domain/entities/Owner";
import OwnerRepositoryImplementation from "../../infrastructure/repository/OwnerRepositoryImplementation";
import PresenceRepositoryImplementation from "../../infrastructure/repository/PresenceRepositoryImplementation";
import Presence from "../../domain/entities/Presence";

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
                "message": "List of all owners",
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

    public confirmMcPresence = async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const presenceRepository = new PresenceRepositoryImplementation();
            //@ts-expect-error
            const presence = new Presence(request.body.mc_id, request.params.eventId, "mc");

            await presenceRepository.changePresenceStatus(presence, true);

            return reply.send({
                "status": 200,
                "message": "Mc is confirmed"
            })
        } catch (e) {
            return reply.send(e)
        }
    }


    public getAllPresenceRequest = async (request: FastifyRequest, reply: FastifyReply) => {
        try {

            const presenceRepository = new PresenceRepositoryImplementation();
            //@ts-expect-error
            const mcsRequest = await presenceRepository.findAllMcsRequest(request.params.eventId);

            return reply.send({
                "status": 200,
                "message": "Mcs request founded",
                "content": mcsRequest
            })
        } catch (e) {
            return reply.send(e)
        }
    }

}
import { FastifyReply, FastifyRequest } from "fastify";
import Controller from "../interfaces/Controller";
import Mc from "../../domain/entities/Mc";
import McRepositoryImplementation from "../../infrastructure/repository/McRepositoryImplementation";
import ModelRepository from "../../domain/repository/ModelRepository";
import Presence from "../../domain/entities/Presence";
import PresenceRepositoryImplementation from "../../infrastructure/repository/PresenceRepositoryImplementation";

export default class McController implements Controller {

    modelRepository: ModelRepository;

    constructor() {
        this.modelRepository = new McRepositoryImplementation()
    }

    public getAllMcs = async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const mcs = await this.modelRepository.findAll();

            reply.code(200).send({
                "status": 200,
                "message": "User has turned to Mc",
                "content": mcs
            })
        } catch (e) {
            reply.send(e)
        }
    }

    public registerNewMc = async (request: FastifyRequest, reply: FastifyReply) => {
        try {

            const data = request.body as any
            const mc = new Mc(data.user_id, data.streetname, data.address)

            await this.modelRepository.save(mc)

            reply.code(200).send({
                "status": 200,
                "message": "User has turned to Mc",
                "content": mc
            })
        } catch (e) {
            reply.send(e)
        }

    }

    public askPresenceOnEvent = async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const presenceRepository = new PresenceRepositoryImplementation();
            //@ts-expect-error
            const presence = new Presence(request.body.mc_id, request.params.eventId, "mc")
            await presenceRepository.save(presence)

        } catch (e) {
            return reply.send(e)
        }
    }

}
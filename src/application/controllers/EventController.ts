import { FastifyReply, FastifyRequest } from "fastify";
import Controller from "../interfaces/Controller";
import ModelRepository from "../../domain/repository/ModelRepository";
import BattleRepositoryImplementation from "../../infrastructure/repository/BattleRepositoryImplementation";
import Battle from "../../domain/entities/Battle";
import EventRepositoryImplementation from "../../infrastructure/repository/EventRepositoryImplementation";
import Event from "../../domain/entities/Event";
import PresenceRepositoryImplementation from "../../infrastructure/repository/PresenceRepositoryImplementation";
import Presence from "../../domain/entities/Presence";
import Session from "../Facades/Session";

export default class EventController implements Controller {

    modelRepository: ModelRepository;

    constructor() {
        this.modelRepository = new EventRepositoryImplementation();
    }

    public getAllEvents = async (
        request: FastifyRequest,
        reply: FastifyReply
    ): Promise<FastifyReply> => {

        try {

            const eventData = await this.modelRepository.findAll();

            return reply.send({
                "status": 200,
                "message": "Event data retrieved with success",
                "content": eventData
            })

        } catch (e) {
            return reply.send(e)
        }

    };

    public registerNewEvent = async (
        request: FastifyRequest,
        reply: FastifyReply
    ) => {

        try {

            const data = request.body as any;

            const event: Event = new Event(
                data.battle_id,
                data.name,
                data.date,
            );

            await this.modelRepository.save(event)

            return reply.send({
                "code": 200,
                "message": "Data is stored"
            });
        } catch (e) {
            return reply.send(e)
        }
    };


    public userConfirmPresence = async (request: FastifyRequest, reply: FastifyReply) => {
        try {

            const presenceRepository = new PresenceRepositoryImplementation();
            //@ts-expect-error
            const presence = new Presence(Session.getUser().id, request.params.eventId, "watch");
            await presenceRepository.save(presence)

            return reply.send({
                "code": 200,
                "message": "User has confirmed presence"
            })
        } catch (e) {
            return reply.send(e)
        }
    }

}

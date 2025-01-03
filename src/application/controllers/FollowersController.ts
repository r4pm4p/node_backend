import { FastifyReply, FastifyRequest } from "fastify";
import ModelRepository from "../../domain/repository/ModelRepository";
import Controller from "../interfaces/Controller";
import FollowersRepositoryImplementation from "../../infrastructure/repository/FollowersRepositoryImplementation";
import Follower from "../../domain/entities/Follower";
import Session from "../Facades/Session";

export default class FollowersController implements Controller {
    modelRepository: ModelRepository;

    constructor() {
        this.modelRepository = new FollowersRepositoryImplementation();
    }

    public followMc = (request: FastifyRequest, reply: FastifyReply) => {
        try {

            //@ts-expect-error
            const follower = new Follower(Session.getUser().id, request.params.mcId, "mc");
            this.modelRepository.save(follower)

            reply.send({
                "status": 200,
                "message": "User is following mc",
            })
        } catch (e) {
            reply.send(e)
        }
    }

    public followBattle = (request: FastifyRequest, reply: FastifyReply) => {
        try {

            //@ts-expect-error
            const follower = new Follower(Session.getUser().id, request.params.battleId, "battle");
            this.modelRepository.save(follower)

            reply.send({
                "status": 200,
                "message": "User is following battle",
            })
        } catch (e) {
            reply.send(e)
        }
    }

}
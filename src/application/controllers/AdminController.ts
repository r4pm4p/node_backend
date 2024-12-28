import { FastifyReply, FastifyRequest } from "fastify";
import Controller from "../interfaces/Controller";
import ModelRepository from "../../domain/repository/ModelRepository";
import Admin from "../../domain/entities/Admin";
import AdminRepositoryImplementation from "../../infrastructure/repository/AdminRepositoryImplementation";

export default class AdminController implements Controller {

    modelRepository: ModelRepository;

    constructor() {
        this.modelRepository = new AdminRepositoryImplementation()
    }

    public getAllAdmins = async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const admins = await this.modelRepository.findAll();

            reply.code(200).send({
                "status": 200,
                "message": "retrieved all Admins",
                "content": admins
            })
        } catch (e) {
            reply.send(e)
        }
    }

    public registerNewAdmin = async (request: FastifyRequest, reply: FastifyReply) => {
        try {

            const data = request.body as any
            const admin = new Admin(data.user_id)

            await this.modelRepository.save(admin)

            reply.code(200).send({
                "status": 200,
                "message": "User has turned to Admin",
                "content": admin
            })
        } catch (e) {
            reply.send(e)
        }

    }

}
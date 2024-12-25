import { FastifyReply, FastifyRequest } from "fastify";
import LoginServices from "../../application/services/LoginServices";
import { Controller } from "../interfaces/Controller";
import Jwt from "../../application/Facades/Jwt";
import { LoginHistoryDTO } from "../../infrastructure/DTO/LoginHistoryDTO";
import { UserDTO } from "../../infrastructure/DTO/UserDTO";

export default class LoginController implements Controller {

    private loginServices: LoginServices;

    constructor() {
        this.loginServices = new LoginServices();
    }


    public login = async (request: FastifyRequest, reply: FastifyReply) => {

        const data = request.body as any

        if (!await this.loginServices.auth(data.email, data.password))
            reply.code(401).send({
                "status": 401,
                "message": "User no Authorized"
            })


        await this.loginServices.saveOnHistory();

        return reply.code(200).send({
            "status": 200,
            "message": "Login confirmed",
            "content": {
                "token": Jwt.make(data.email)
            }
        })
    }


    public getUserLoginHistory = async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const { id } = request.params as any

            const userLoginHistory = await this.loginServices.getUserLoginHistory(id)

            reply.code(200).send({
                "status": 200,
                "message": "Login history has been retrieved",
                "content": userLoginHistory
            })
        } catch (error) {

            reply.send(error)
        }
    }
}
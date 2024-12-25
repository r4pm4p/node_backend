import { FastifyReply, FastifyRequest } from "fastify";
import LoginServices from "../../application/services/LoginServices";
import { Controller } from "../interfaces/Controller";
import Jwt from "../../application/Facades/Jwt";

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


        return reply.code(200).send({
            "status": 200,
            "message": "Login confirmed",
            "content": {
                "token": Jwt.make(data.email)
            }
        })
    }
}
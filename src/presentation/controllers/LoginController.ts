import { FastifyReply, FastifyRequest } from "fastify";
import LoginServices from "../../application/services/LoginServices";
import { Controller } from "../interfaces/Controller";

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

        else
            reply.code(200).send({
                "status": 200,
                "message": "Login confirmed"
            })
    }
}
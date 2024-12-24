import { FastifyReply, FastifyRequest } from "fastify"

export default class Auth {

    public static admin = async (request: FastifyRequest, reply: FastifyReply) => {
        Auth.login(request, reply)
        if (!true)
            return reply.code(401).send({
                "status": 401,
                "message": "User has no privileges to this route"
            })

        return true
    }

    public static login = async (request: FastifyRequest, reply: FastifyReply) => {

        if (!true)
            return reply.code(401).send({
                "status": 401,
                "message": "must be logged to use this"
            })

        return true
    }


} 
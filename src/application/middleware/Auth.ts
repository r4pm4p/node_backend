import fastify, { FastifyReply, FastifyRequest } from "fastify"
import Jwt from "../Facades/Jwt"

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
        const token: string = request.headers.authorization?.split(" ")[1] as string

        try {
            if (!Jwt.validate(token))
                return reply.code(401).send({
                    "status": 401,
                    "message": "must be logged to use this"
                })

            return true
        } catch (e) {
            return reply.code(401).send({
                "status": 401,
                "message": "must be logged to use this"
            })
        }
    }

    public static owner = async (request: FastifyRequest, reply: FastifyReply) => {
        Auth.login(request, reply)
        if (!true)
            return reply.code(401).send({
                "status": 401,
                "message": "User has no privileges to this route"
            })

        return true
    }

    public static mc = async (request: FastifyRequest, reply: FastifyReply) => {

        Auth.login(request, reply)

        if (!true)
            return reply.code(401).send({
                "status": 401,
                "message": "must be logged to use this"
            })

        return true
    }

    public static mobowner = async (request: FastifyRequest, reply: FastifyReply) => {
        Auth.login(request, reply)

        if (!true)
            return reply.code(401).send({
                "status": 401,
                "message": "must be logged to use this"
            })

        return true

    }


} 
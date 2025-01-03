import { FastifyReply, FastifyRequest } from "fastify"
import Jwt from "../Facades/Jwt"
import Session from "../Facades/Session"
import AdminDTO from "../../infrastructure/dto/AdminDTO"
import { isSet } from "util/types"

export default class Auth {

    public static admin = async (request: FastifyRequest, reply: FastifyReply) => {
        Auth.login(request, reply)

        if (!Session.isAdminSession())
            return reply.code(401).send({
                "status": 401,
                "message": "User has no privileges to this route"
            })

        return true
    }

    public static login = async (request: FastifyRequest, reply: FastifyReply) => {
        const token: string = request.headers.authorization?.split(" ")[1] as string

        const payload: any = Jwt.validate(token)

        const admin = await AdminDTO.findOne({
            where: {
                user_id: payload.user.id
            }
        })

        try {
            if (!payload)
                return reply.code(401).send({
                    "status": 401,
                    "message": "musts be logged to use this"
                })

            Session.setUser(payload.user)

            if (admin) {
                Session.setAdminSession()
            }
            
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
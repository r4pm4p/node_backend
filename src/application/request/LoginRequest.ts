import { FastifySchema } from "fastify";

const loginRequest: FastifySchema = {
    body: {
        type: "object",
        required: ["email", "password"],
        properties: {
            email: { type: "string" },
            password: { type: "string" }
        }
    }
}

export default loginRequest;
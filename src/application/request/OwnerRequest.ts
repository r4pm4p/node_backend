import { FastifySchema } from "fastify";

const createOwnerRequest: FastifySchema = {
    body: {
        type: "object",
        required: ["user_id"],
        properties: {
            user_id: { type: "string" },
        }
    }
}

export default createOwnerRequest;
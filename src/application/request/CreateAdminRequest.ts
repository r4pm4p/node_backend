import { FastifySchema } from "fastify";

const createAdminRequest: FastifySchema = {
    body: {
        type: "object",
        required: ["user_id"],
        properties: {
            user_id: { type: "integer" },
        }
    }
}

export default createAdminRequest;
import { FastifySchema } from "fastify";

const createMcRequest: FastifySchema = {
    body: {
        type: "object",
        required: ["user_id", "streetname", "address"],
        properties: {
            user_id: { type: "integer" },
            streetname: { type: "string" },
            address: { type: "object" }
        }
    }
}

export default createMcRequest;
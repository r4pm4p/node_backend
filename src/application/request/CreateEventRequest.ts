import { FastifySchema } from "fastify";

const createEventRequest: FastifySchema = {
    body: {
        type: "object",
        required: ["battle_id", "name", "date"],
        properties: {
            battle_id: { type: "integer" },
            name: { type: "string" },
            date: { type: "string" },

        }
    }
}

export default createEventRequest;
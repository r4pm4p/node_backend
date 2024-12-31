import { FastifySchema } from "fastify";

const createBattleRequest: FastifySchema = {
    body: {
        type: "object",
        required: ["owner_id", "name", "address", "map_position"],
        properties: {
            owner_id: { type: "integer" },
            name: { type: "string" },
            address: { type: "object" },
            map_position: { type: "object" }
        }
    }
}

export default createBattleRequest;
import { FastifySchema } from "fastify";

const addPodiumRequest: FastifySchema = {
    body: {
        type: "object",
        required: ["fst_place_id", "scd_place_id", "thd_place_id"],
        properties: {
            fst_place_id: { type: "integer" },
            scd_place_id: { type: "integer" },
            thd_place_id: { type: "integer" },
        }
    }
}

export default addPodiumRequest;
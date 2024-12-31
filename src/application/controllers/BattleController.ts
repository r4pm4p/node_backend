import { FastifyReply, FastifyRequest } from "fastify";
import Controller from "../interfaces/Controller";
import ModelRepository from "../../domain/repository/ModelRepository";
import BattleRepositoryImplementation from "../../infrastructure/repository/BattleRepositoryImplementation";
import Battle from "../../domain/entities/Battle";

export default class BattleController implements Controller {

    modelRepository: ModelRepository;

    constructor() {
        this.modelRepository = new BattleRepositoryImplementation();
    }

    public getAllBattles = async (
        request: FastifyRequest,
        reply: FastifyReply
    ): Promise<FastifyReply> => {

        const battleData = await this.modelRepository.findAll();

        return reply.send(battleData)

    };

    public registerNewBattle = async (
        request: FastifyRequest,
        reply: FastifyReply
    ) => {

        try {

            const data = request.body as any;

            const battle: Battle = new Battle(
                data.owner_id,
                data.name,
                data.address,
                data.map_position
            );

            await this.modelRepository.save(battle)

            return reply.send({
                "code": 200,
                "message": "Data is stored"
            });
        } catch (e) {
            return reply.send(e)
        }
    };
}

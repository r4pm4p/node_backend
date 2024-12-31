import ModelRepository from "../../domain/repository/ModelRepository";
import Battle from "../../domain/entities/Battle";
import BattleDTO from "../dto/BattleDTO";

export default class BattleRepositoryImplementation implements ModelRepository {
    public findAll = async (): Promise<Array<BattleDTO>> => {

        try {

            const data: Array<BattleDTO> = await BattleDTO.findAll();
            return data;

        } catch (e) {
            throw new Error("Error on searching all registers")
        }
    }
    public findById = async (id: string): Promise<BattleDTO> => {
        throw new Error("Method not implemented.");
    };

    public save = async (battle: Battle): Promise<void> => {

        try {

            const battleDTO = new BattleDTO(battle.toDTO())
            await battleDTO.save();

        } catch (e) {
            throw e
        }

    };

    public delete = async (id: string): Promise<boolean> => {
        throw new Error("not suportesr");
    }

}

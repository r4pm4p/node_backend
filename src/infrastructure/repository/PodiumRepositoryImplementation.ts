import Mc from "../../domain/entities/Mc";
import Podium from "../../domain/entities/Podium";
import ModelRepository from "../../domain/repository/ModelRepository";
import McDTO from "../dto/McDTO";
import PodiumDTO from "../dto/PodiumDTO";

export default class PodiumRepositoryImplementation implements ModelRepository {
    public findAll(): Promise<Array<any>> {
        throw new Error("errr")
    }

    public findById(id: string): Promise<any> {
        throw new Error("errr")
    }

    public async save(podium: Podium): Promise<void> {

        const podiumDTO = new PodiumDTO(podium.toDTO())

        await podiumDTO.save()
    }

    public async delete(id: string): Promise<boolean> {
        throw new Error("errr")
    }
}
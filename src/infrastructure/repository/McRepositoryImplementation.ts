import Mc from "../../domain/entities/Mc";
import ModelRepository from "../../domain/repository/ModelRepository";
import McDTO from "../dto/McDTO";

export default class McRepositoryImplementation implements ModelRepository {
    public findAll(): Promise<Array<any>> {
        throw new Error("errr")
    }

    public findById(id: string): Promise<any> {
        throw new Error("errr")
    }

    public async save(mc: Mc): Promise<void> {

        const mcDTO = new McDTO(mc.toDTO())

        await mcDTO.save()

    }

    public async delete(id: string): Promise<boolean> {
        throw new Error("errr")
    }
}
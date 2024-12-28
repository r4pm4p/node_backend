import Owner from "../../domain/entities/Owner";
import ModelRepository from "../../domain/repository/ModelRepository";
import OwnerDTO from "../dto/OwnerDTO";

export default class OwnerRepositoryImplementation implements ModelRepository {
    public findAll(): Promise<Array<any>> {
        throw new Error("errr")
    }

    public findById(id: string): Promise<any> {
        throw new Error("errr")
    }

    public async save(owner: Owner): Promise<void> {

        const ownerDTO = new OwnerDTO(owner.toDTO())

        await ownerDTO.save()
    }

    public async delete(id: string): Promise<boolean> {
        throw new Error("errr")
    }
}
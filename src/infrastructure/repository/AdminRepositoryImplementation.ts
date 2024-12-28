import Admin from "../../domain/entities/Admin";
import ModelRepository from "../../domain/repository/ModelRepository";
import AdminDTO from "../dto/AdminDTO";

export default class AdminRepositoryImplementation implements ModelRepository {
    public findAll(): Promise<Array<any>> {
        throw new Error("errr")
    }

    public findById(id: string): Promise<any> {
        throw new Error("errr")
    }

    public async save(admin: Admin): Promise<void> {

        const adminDTO = new AdminDTO(admin.toDTO())

        await adminDTO.save()
    }

    public async delete(id: string): Promise<boolean> {
        throw new Error("errr")
    }
}
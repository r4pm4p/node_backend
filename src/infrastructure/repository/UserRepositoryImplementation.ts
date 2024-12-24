import { User } from "../../domain/entities/User";
import { ModelRepository } from "../../domain/repository/ModelRepository";
import { UserDTO } from "../DTO/UserDTO";

export class UserRepositoryImplementation implements ModelRepository {
  public findAll = async (): Promise<Array<any>> => {

    try {

      const data: Array<UserDTO> = await UserDTO.findAll();
      return data;

    } catch (e) {
      throw new Error("Error on searching all registers")
    }
  }
  public findById = async (id: string): Promise<User> => {
    throw new Error("Method not implemented.");
  };
  public save = async (user: User): Promise<void> => {

    try {

      const userDTO = new UserDTO(user.toDTO())
      userDTO.save();

    } catch (e) {
      throw new Error("not implemented")
    }

  };

  public delete = async (id: string): Promise<boolean> => {
    throw new Error("not suportesr");
  }
}

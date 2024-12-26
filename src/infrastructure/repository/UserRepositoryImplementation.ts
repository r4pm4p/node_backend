import { User } from "../../domain/entities/User";
import { ModelRepository } from "../../domain/repository/ModelRepository";
import { LoginHistoryDTO } from "../dto/LoginHistoryDTO";
import { UserDTO } from "../dto/UserDTO";

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
      await userDTO.save();

    } catch (e) {
      throw new Error("not implemented")
    }

  };

  public findByEmail = async (email: string) => {
    return await UserDTO.findOne({
      where: {
        email: email
      }
    })
  }

  public delete = async (id: string): Promise<boolean> => {
    throw new Error("not suportesr");
  }


  public getLoginHistory = async (id: number) => {
    return await UserDTO.findOne({
      where: {
        "id": id
      },
      include: LoginHistoryDTO,
    });
  }
}

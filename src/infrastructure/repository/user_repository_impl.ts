import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repository/UserRepository";

export class UserRepositoryImplementation implements UserRepository {
  public findById = async (id: string): Promise<User> => {
    throw new Error("Method not implemented.");
  };
  public save = async (user: User): Promise<void> => {
    throw new Error("Method not implemented.");
  };
}

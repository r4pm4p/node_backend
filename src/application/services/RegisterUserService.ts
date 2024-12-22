import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repository/UserRepository";
import ServicesInterface from "../interfaces/ServicesInterface";

export class RegisterUserService implements ServicesInterface {
  constructor(private user_repository: UserRepository) {}

  public async execute(user: User): Promise<void> {
    this.user_repository.save(user);
  }
}

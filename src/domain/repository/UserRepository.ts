import { User } from "../entities/User";

export interface UserRepository {
  findById(id: string): Promise<User>;
  save(user: User): Promise<void>;
}

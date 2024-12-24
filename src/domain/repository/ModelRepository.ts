import { User } from "../entities/User";

export interface ModelRepository {
  findAll(): Promise<Array<User>>;
  findById(id: string): Promise<User>;
  save(user: any): Promise<void>;
  delete(id: string): Promise<boolean>;
}

import { Model } from "sequelize";
import EntitiesInterface from "../interfaces/EntitiesInterface";

export default interface ModelRepository {
  findAll(): Promise<Array<Model>>;
  findById(id: string): Promise<Model>;
  save(model: EntitiesInterface): Promise<void>;
  delete(id: string): Promise<boolean>;
}

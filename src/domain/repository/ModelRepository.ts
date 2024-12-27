
export default interface ModelRepository {
  findAll(): Promise<Array<any>>;
  findById(id: string): Promise<any>;
  save(model: any): Promise<void>;
  delete(id: string): Promise<boolean>;
}

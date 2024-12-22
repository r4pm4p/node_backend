import { User } from "../../domain/entities/User";

export default interface ServicesInterface {
  execute(user: User): Promise<void>;
}

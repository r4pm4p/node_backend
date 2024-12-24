import { UserDTO } from "../../infrastructure/DTO/UserDTO"
import { UserRepositoryImplementation } from "../../infrastructure/repository/UserRepositoryImplementation"
import { Hash } from "../Facades/Hash"

export default class LoginServices {

    public auth = async (email: string, password: string): Promise<boolean> => {
        const userRepository: UserRepositoryImplementation = new UserRepositoryImplementation()
        const user: any = await userRepository.findByEmail(email) as UserDTO

        return user.password === Hash.make(password)
    }



}
import { LoginHistoryDTO } from "../../infrastructure/DTO/LoginHistoryDTO";
import { UserDTO } from "../../infrastructure/DTO/UserDTO"
import { UserRepositoryImplementation } from "../../infrastructure/repository/UserRepositoryImplementation"
import { Hash } from "../Facades/Hash"

export default class LoginServices {

    private loginHistoryUSerId: number = 0;

    public auth = async (email: string, password: string): Promise<boolean> => {
        const userRepository: UserRepositoryImplementation = new UserRepositoryImplementation()
        const user: any = await userRepository.findByEmail(email) as UserDTO

        this.setLoginHistoryUserId(user.id)

        return user.password === Hash.make(password)
    }

    public saveOnHistory = async () => {
        try {
            const loginHistory = new LoginHistoryDTO({
                user_id: this.loginHistoryUSerId
            })
            await loginHistory.save()

        } catch (e) {
            console.log(e)
        }
    }

    public getUserLoginHistory = async (userId: number) => {
        const userRepository: UserRepositoryImplementation = new UserRepositoryImplementation();

        return userRepository.getLoginHistory(userId)
    }

    private setLoginHistoryUserId = (id: number) => {
        this.loginHistoryUSerId = id
    }


}
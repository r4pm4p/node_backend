import LoginHistoryDTO from "../../infrastructure/dto/LoginHistoryDTO";
import UserDTO from "../../infrastructure/dto/UserDTO";
import UserRepositoryImplementation from "../../infrastructure/repository/UserRepositoryImplementation";
import Hash from "../Facades/Hash";

export default class LoginServices {
  private loginHistoryUSerId: number = 0;

  public auth = async (email: string, password: string) => {
    const userRepository: UserRepositoryImplementation =
      new UserRepositoryImplementation();
    const user: any = await userRepository.findByEmail(email);

    if (!user) return false;

    this.setLoginHistoryUserId(user.id);

    if (user.password === Hash.make(password))
      return {
        id: user.id,
        email: user.email,
        name: user.name,
      };
    else return false;
  };

  public saveOnHistory = async () => {
    try {
      const loginHistory = new LoginHistoryDTO({
        user_id: this.loginHistoryUSerId,
      });
      await loginHistory.save();
    } catch (e) {
      console.log(e);
    }
  };

  public getUserLoginHistory = async (userId: number) => {
    const userRepository: UserRepositoryImplementation =
      new UserRepositoryImplementation();

    return userRepository.getLoginHistory(userId);
  };

  private setLoginHistoryUserId = (id: number) => {
    this.loginHistoryUSerId = id;
  };
}

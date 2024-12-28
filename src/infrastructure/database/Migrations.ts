import LoginHistoryDTO from "../dto/LoginHistoryDTO";
import McDTO from "../dto/McDTO";
import UserDTO from "../dto/UserDTO";

export default class Migration {
    static sync = () => {
        UserDTO.sync();
        McDTO.sync()
        LoginHistoryDTO.sync()
    }
}
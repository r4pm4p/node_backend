import AdminDTO from "../dto/AdminDTO";
import LoginHistoryDTO from "../dto/LoginHistoryDTO";
import McDTO from "../dto/McDTO";
import OwnerDTO from "../dto/OwnerDTO";
import UserDTO from "../dto/UserDTO";

export default class Migration {
    static sync = () => {
        UserDTO.sync();
        McDTO.sync()
        LoginHistoryDTO.sync()
        OwnerDTO.sync()
        AdminDTO.sync()
    }
}
import AdminDTO from "../dto/AdminDTO";
import BattleDTO from "../dto/BattleDTO";
import BattleFollowers from "../dto/BattleFollowersDTO";
import EventDTO from "../dto/EventDTO";
import LoginHistoryDTO from "../dto/LoginHistoryDTO";
import McDTO from "../dto/McDTO";
import McFollowers from "../dto/McFollowersDTO";
import OwnerDTO from "../dto/OwnerDTO";
import UserDTO from "../dto/UserDTO";

export default class Migration {
    static sync = () => {

        UserDTO.sync();
        McDTO.sync();
        LoginHistoryDTO.sync();
        OwnerDTO.sync();
        AdminDTO.sync();
        BattleDTO.sync();
        EventDTO.sync();
        McFollowers.sync();
        BattleFollowers.sync();

        Migration.relationship()
    }


    static relationship = () => {

        UserDTO.hasMany(LoginHistoryDTO, {
            foreignKey: {
                name: "user_id"
            }
        })
        UserDTO.hasOne(McDTO, {
            foreignKey: {
                name: "user_id"
            }
        })

        BattleDTO.hasOne(OwnerDTO, {
            foreignKey: {
                name: "id"
            }
        })

        OwnerDTO.hasOne(BattleDTO, {
            foreignKey: {
                name: "owner_id"
            }
        })

        EventDTO.belongsTo(BattleDTO, {
            foreignKey: {
                name: "battle_id"
            }
        })
    }

}
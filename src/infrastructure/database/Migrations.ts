import AdminDTO from "../dto/AdminDTO";
import BattleDTO from "../dto/BattleDTO";
import BattleFollowersDTO from "../dto/BattleFollowersDTO";
import EventDTO from "../dto/EventDTO";
import LoginHistoryDTO from "../dto/LoginHistoryDTO";
import McDTO from "../dto/McDTO";
import McFollowersDTO from "../dto/McFollowersDTO";
import McPresencelistDTO from "../dto/McPresencelistDTO";
import OwnerDTO from "../dto/OwnerDTO";
import PodiumDTO from "../dto/PodiumDTO";
import UserDTO from "../dto/UserDTO";
import WatchlistDTO from "../dto/WatchlistDTO";

export default class Migration {
  static sync = async () => {

    await UserDTO.sync();
    await McDTO.sync();
    await LoginHistoryDTO.sync();
    await OwnerDTO.sync();
    await AdminDTO.sync();
    await BattleDTO.sync();
    await EventDTO.sync();
    await McFollowersDTO.sync();
    await BattleFollowersDTO.sync();
    await WatchlistDTO.sync();
    await McPresencelistDTO.sync();
    await PodiumDTO.sync();

    Migration.relationship();
  };

  static relationship = () => {
    UserDTO.hasMany(LoginHistoryDTO, {
      foreignKey: {
        name: "user_id",
      },
    });
    UserDTO.hasOne(McDTO, {
      foreignKey: {
        name: "user_id",
      },
    });

    BattleDTO.hasOne(OwnerDTO, {
      foreignKey: {
        name: "id",
      },
    });

    OwnerDTO.hasOne(BattleDTO, {
      foreignKey: {
        name: "owner_id",
      },
    });

    EventDTO.belongsTo(BattleDTO, {
      foreignKey: {
        name: "battle_id",
      },
    });
  };
}

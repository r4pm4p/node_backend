import { DataTypes, Model } from "sequelize";
import { sequelize } from '../database/Connection';


class BattleFollowers extends Model {

}

BattleFollowers.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "users",
            key: "id"
        },
        allowNull: false,
        unique: false
    },
    battle_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "battles",
            key: "id"
        },
        allowNull: false,
        unique: false
    },
}, {
    sequelize,
    modelName: "battle_followers"
})

export default BattleFollowers
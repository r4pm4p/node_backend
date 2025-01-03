import { DataTypes, Model } from "sequelize";
import { sequelize } from '../database/Connection';


class McFollowers extends Model {

}

McFollowers.init({
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
    mc_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "mcs",
            key: "id"
        },
        allowNull: false,
        unique: false
    },
}, {
    sequelize,
    modelName: "mc_followers"
})

export default McFollowers
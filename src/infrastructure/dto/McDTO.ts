import { DataTypes, Model } from "sequelize";
import { sequelize } from '../database/Connection';


class McDTO extends Model { }

McDTO.init({
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
        }
    },
    streetname: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    sequelize, modelName: "mc"
})

McDTO.sync()

export default McDTO;
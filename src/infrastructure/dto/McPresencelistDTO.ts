import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/Connection";

class McPresencelistDTO extends Model { }

McPresencelistDTO.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
    event_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "events",
            key: "id"
        },
        allowNull: false,
        unique: false
    },
    is_approved: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    sequelize,
    modelName: "mc_presencelist"
})

export default McPresencelistDTO
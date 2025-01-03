import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/Connection";

class WatchlistDTO extends Model { }

WatchlistDTO.init({
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
    event_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "events",
            key: "id"
        },
        allowNull: false,
        unique: false
    },
}, {
    sequelize,
    modelName: "watchlist"
})

export default WatchlistDTO
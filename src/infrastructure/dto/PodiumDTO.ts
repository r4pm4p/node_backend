import { DataTypes, Model } from "sequelize";
import { sequelize } from '../database/Connection';


class PodiumDTO extends Model { }

PodiumDTO.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    event_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "events",
            key: "id"
        },
        allowNull: false,
        unique: true
    },
    fst_place_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "mcs",
            key: "id"
        },
        allowNull: false,
        unique: false
    },
    scd_place_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "mcs",
            key: "id"
        },
        allowNull: false,
        unique: false
    },
    thd_place_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "mcs",
            key: "id"
        },
        allowNull: false,
        unique: false
    }
}, {
    sequelize, modelName: "podium_results"
})

export default PodiumDTO;
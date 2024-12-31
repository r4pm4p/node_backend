import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/Connection';
import BattleDTO from './BattleDTO';


class OwnerDTO extends Model { }

OwnerDTO.init(
    {
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
            unique: true
        },
    },
    {
        sequelize,
        modelName: 'owner',
    },
);

export default OwnerDTO;
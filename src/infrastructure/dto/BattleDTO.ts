import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/Connection';
import OwnerDTO from './OwnerDTO';


class BattleDTO extends Model { }

BattleDTO.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        map_position: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        owner_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            references: {
                model: 'owners',
                key: 'id'
            },
        },
    },
    {
        sequelize,
        modelName: 'battle',
    },
);


export default BattleDTO;
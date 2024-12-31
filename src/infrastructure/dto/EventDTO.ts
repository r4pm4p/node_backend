import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/Connection';
import BattleDTO from './BattleDTO';


class EventDTO extends Model { }

EventDTO.init(
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
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        battle_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'battles',
                key: 'id'
            },
        },
    },
    {
        sequelize,
        modelName: 'event',
    },
);


export default EventDTO;
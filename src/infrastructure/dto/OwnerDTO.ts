import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/Connection';


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
        is_approved: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            unique: true,
            defaultValue: false
        },
    },
    {
        sequelize,
        modelName: 'owner',
    },
);

export default OwnerDTO;
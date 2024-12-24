import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/Connection';


class UserDTO extends Model { }

UserDTO.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'user',
    },
);
UserDTO.sync();

export { UserDTO }
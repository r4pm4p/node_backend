import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/Connection';
import { LoginHistoryDTO } from './LoginHistoryDTO';


class UserDTO extends Model { }

UserDTO.init(
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
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'user',
    },
);

UserDTO.hasMany(LoginHistoryDTO, {
    foreignKey: {
        name: "user_id"
    }
})
UserDTO.sync();

export { UserDTO }
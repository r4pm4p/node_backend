import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/Connection';
import LoginHistoryDTO from './LoginHistoryDTO';
import McDTO from './McDTO';


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
            unique: true
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
UserDTO.hasOne(McDTO, {
    foreignKey: {
        name: "user_id"
    }
})

export default UserDTO;
import { DataTypes, Model } from "sequelize";
import { sequelize } from '../database/Connection';

class LoginHistoryDTO extends Model { }

LoginHistoryDTO.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        },
        onDelete: "CASCADE"
    }
}, { sequelize, modelName: 'login' })


export default LoginHistoryDTO
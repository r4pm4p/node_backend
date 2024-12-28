import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/Connection';


class AdminDTO extends Model { }

AdminDTO.init(
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
        modelName: 'admin',
    },
);


export default AdminDTO;
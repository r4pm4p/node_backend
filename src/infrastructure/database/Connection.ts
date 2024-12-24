import { Sequelize } from "sequelize";
require("dotenv").config();


const sequelize = new Sequelize(process.env.PG_DATABASE as string, process.env.PG_USER as string, process.env.PG_PASSWORD, {
    host: process.env.PG_HOST,
    dialect: 'postgres'
})


export { sequelize }
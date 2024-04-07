import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config()
const sequelize=new Sequelize(process.env.DB_NAME,process.env.USER,process.env.PASSWORD,{
host:'localhost',
dialect:'mysql'
});



export default sequelize

import {UUIDV4, DataTypes} from 'sequelize';
import sequelize from "../db/database.js";
export const User= sequelize.define(
   "User",
   {
     
      id: {
         type: DataTypes.UUID,
         defaultValue: UUIDV4,
         primaryKey: true,
      },

   
      username: {
         type: DataTypes.STRING,
         allowNull: false,
      },

      password: {
         type: DataTypes.STRING,
         allowNull: false,
        
      },
      email:
      {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role:
      {
        type: DataTypes.STRING,
        allowNull: false,
      }
   },
   {
    tableName:'User'
   }
   
);



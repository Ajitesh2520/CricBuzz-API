import {UUIDV4, DataTypes} from 'sequelize';
import sequelize from "../db/database.js";
// import { Team } from './team.js';
export const Match= sequelize.define(
   "Match",
   {
     
      match_id: {
         type: DataTypes.UUID,
         defaultValue: UUIDV4,
         primaryKey: true,
      },

   
      team_1: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      team_2: {
        type: DataTypes.STRING,
        allowNull: false,
     },

      date: {
         type: DataTypes.DATE,
         allowNull: false,
        
      },
      venue:
      {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status:
      {
        type: DataTypes.STRING,
        allowNull: false,
      }
   },
   {
    tableName:'Match'
   }

   
);
// Match.hasMany(Team,{foreignKey:'match_id'})


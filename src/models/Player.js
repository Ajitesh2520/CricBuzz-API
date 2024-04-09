import {UUIDV4, DataTypes} from 'sequelize';
import { Team } from './Team.js';
import sequelize from "../db/database.js";
export const Player= sequelize.define(
   "Player",
   {
     
    player_id: {
         type: DataTypes.INTEGER,
         defaultValue: 0,
         primaryKey: true,
      },

    name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      matches_played: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue:0
     },
     runs: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
     },
     average: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue:0.0
     },
      
     strike_rate: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue:0.0
     },
     team_id:{
type:DataTypes.UUID,
allowNull:false
     }
      
   },
   {
    tableName:'Player'
   }
   
);

// Player.belongsTo(Team, { foreignKey: 'team_id' }); 


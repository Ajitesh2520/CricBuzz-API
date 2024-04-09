import {UUIDV4, DataTypes} from 'sequelize';
// import { Player } from './Player.js';
import sequelize from "../db/database.js";
// import { Match } from './Match.js';
export const Team= sequelize.define(
   "Team",
   {
     
      id: {
         type: DataTypes.UUID,
         defaultValue: UUIDV4,
         primaryKey: true,
      },

    name: {
         type: DataTypes.STRING,
         allowNull: false,
         unique:true
      },
      

      
   },
   {
    tableName:'Team'
   }
   
);

// Team.hasMany(Player, { foreignKey: 'team_id' }); 
// Team.belongsTo(Match, { foreignKey: 'match_id' })


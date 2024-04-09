import { Player } from './Player.js';
import { Team } from './Team.js';

// Define associations after all models are imported
Player.belongsTo(Team, { foreignKey: 'team_id' });
Team.hasMany(Player, { foreignKey: 'team_id' });

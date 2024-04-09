import { Player } from './Player.js';
import { Team } from './Team.js';


Player.belongsTo(Team, { foreignKey: 'team_id' });
Team.hasMany(Player, { foreignKey: 'team_id' });

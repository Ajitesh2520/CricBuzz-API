
import { Player } from "../models/player.js";


// GET request to fetch details of a player by ID
// router.get('/:playerId', async (req, res) => {
//     try {
//         // Extract playerId from request parameters
//         const { playerId } = req.params;

//         // Find the player by ID
//         const player = await Player.findByPk(playerId);

//         // If player is not found, return 404 Not Found
//         if (!player) {
//             return res.status(404).json({ message: 'Player not found' });
//         }

//         // If player is found, return the player details
//         res.status(200).json(player);
//     } catch (error) {
//         // If any error occurs, return 500 Internal Server Error
//         console.error('Error fetching player details:', error);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// });
export const getPlayer=async(req,res,next)=>{
    try{
        const { playerId } = req.params;
        const player=await Player.findOne({where:{
            id:req.body.params.player_id
        }})
        if(!player){
            throw new Error("User team doesnt exist")
        }
        
        res.status(200).json(player)
    }catch(e){
console.log("error",e)
    }
}

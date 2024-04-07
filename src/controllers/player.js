import { Player } from "../models/Player.js";
import { Team } from "../models/Team.js";
export const createPlayer=async(req,res,next)=>{
    try{
        const team=await Team.findOne({where:{
            name:req.body.team_name
        }})
        if(!team){
            throw new Error("User team doesnt exist")
        }
        const player=await Player.create({
            name:req.body.name,
            matches_played:req.body.matches_played,
            runs:req.body.runs,
            average:req.body.average,
            strike_rate:req.body.strike_rate,
            team_id:team.id
            
        })
        res.status(200).json(player)
    }catch(e){
console.log("error",e)
    }
}
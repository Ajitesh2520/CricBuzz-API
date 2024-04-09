import { Player } from "../models/Player.js";
import { Team } from "../models/Team.js";
export const createPlayer=async(req,res,next)=>{
    if(req.data?.role==='user'){
        res.status(403).json({message:'unauthorized'})
    }
    try{
        const team=await Team.findOne({where:{
            name:req.body.team_name
        }})
        if(!team){
            throw new Error("User team doesnt exist")
        }
        const player=await Player.create({
            player_id:req.body.player_id,
            name:req.body.name,
            matches_played:req.body.matches_played,
            runs:req.body.runs,
            average:req.body.average,
            strike_rate:req.body.strike_rate,
            team_id:team.id
            
        })
        res.status(200).json(player)
    }
    catch(e){
        console.log("error",e)
        res.status(400).send(e)
    }
}
export const getPlayer=async(req,res)=>{
    try{
        const player=await Player.findOne({where:{
            player_id:req.params.player_id
        }})
        if(!player){
            throw new Error("Player doesnt exist")
        }
        res.status(200).json(player)
    }
    catch(e){
        console.log("error",e)
        res.status(400).send(e)
    }
}
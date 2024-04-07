import { Match } from "../models/Match.js";
import { Player } from "../models/Player.js";
import { Team } from "../models/Team.js";

export const createMatch=async(req,res,next)=>{
    try{
           
           const  team_1=await Team.findOne({
            where:{
                name:req.body.team_1
            },
            include:[Player]
            
        })
        const  team_2=await Team.findOne({
            where:{
                name:req.body.team_2
            },
            include:[Player]
            
        })
            
            const match=await Match.create({
            team_1:team_1.name,
            team_2:team_2.name,
            date:req.body.date,
            venue:req.body.venue,
            squad:[team_1,team_2]
            
            
        })
        res.status(200).json(player)
    }catch(e){
console.log("error",e)
    }
}
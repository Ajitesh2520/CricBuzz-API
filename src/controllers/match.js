import { Match } from "../models/Match.js";
import { Player } from "../models/Player.js";
import { Team } from "../models/Team.js";

export const createMatch=async(req,res,next)=>{
    if(req.data?.role==='user'){
        res.status(403).json({message:'unauthorized'})
    }
    try{
           const match=await Match.findOne({
            where:{
                venue:req.body.venue,
                date:req.body.date
           }})
           if(match){
            res.status(400).json({message:"match already exists for this date and venue"})
            return
           }
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
            
            const new_match=await Match.create({
            team_1:team_1.name,
            team_2:team_2.name,
            date:req.body.date,
            venue:req.body.venue,
            status:req.body.status,
            squad:[team_1,team_2]
            
            
        })

        res.status(200).json(new_match)
    }
    catch(e){
        console.log("error",e)
        res.status(400).send(e)
    }
}

export const getMatch=async(req,res)=>{
    try{
        const match=await Match.findOne({
            where:{
                match_id:req.params.match_id
        }})
       if(!match){
        res.status(404).json({message:'match not found'})
       } 
       res.status(200).json(match)

    }
    catch(e){
        console.log(e)
        res.status(500).send(e)
    }
}
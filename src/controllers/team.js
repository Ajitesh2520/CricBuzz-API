import { Player } from "../models/Player.js";
import { Team } from "../models/Team.js";
export const createTeam=async(req,res,next)=>{
    if(req.data?.role==='user'){
        res.status(403).json({message:'unauthorized'})
    }
    try{
        
        const team=await Team.create({
            name:req.body.name,
            
        })
        res.status(200).json(team)
    }catch(e){
console.log("error",e)
    }
}
export const findTeam=async(req,res,next)=>{
    try{
        
        const team=await Team.findOne({
            where:{
                name:req.body.name
            },
            include:[Player]
            
        })
        res.status(200).json(team)
    }catch(e){
console.log("error",e)
res.status(400).send(e)
    }
}
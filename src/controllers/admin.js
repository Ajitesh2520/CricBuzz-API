import {User} from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {createError} from '../error.js';

export const signup=async(req,res,next)=>{
    const user=await User.findOne({where:{
        email:req.body.email
    }})
    if(user)
    {
        res.status(400).json({message:"User already exists with this email"})
    }
    try{
        const salt=bcrypt.genSaltSync(10);
        const hashedPassword=bcrypt.hashSync(req.body.password,salt);
        const newUser={...req.body,password:hashedPassword};
        const user=await User.create(newUser)
        const token=jwt.sign({id:user.id,role:user.role},process.env.JWT);
        const {password,...others}=user;
        res.cookie('access_token',token,{maxAge:24*60*60*1000,httpOnly:true,sameSite:'none',secure:true}).status(200).json(user);
    }
    catch(err){
        console.log(err);
        res.status(400).send(err)
    }
}
export const signin=async(req,res,next)=>{
    try{
        const user = await User.findOne({
            where: {
              email: req.body.email
            }
          });
        if(!user){
            return next(createError(404,'user not found'));
        }
    
        const isValid=bcrypt.compare(req.body.password,user.password);
        if(!isValid){
            return next(createError(401,'invalid credentials'));
        }
        const token=jwt.sign({id:user.id,role:user.role},process.env.JWT);
        const {password,...others}=user;
        res.cookie('access_token',token,{maxAge:24*60*60*1000,httpOnly:true,sameSite:'none',secure:true}).status(200).json(user);
    }
    catch(err){
        console.log(err);
        res.status(400).send(e)
    }
}


import express from 'express';

import {Match} from './models/Match.js';
import {Team} from './models/Team.js';
import {Player} from './models/Player.js';
import {User} from './models/User.js';


// require('./db/database')
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
import sequelize from './db/database.js';
const app=express()

dotenv.config()

const port=process.env.PORT || 3000


app.use(express.json())
app.use(cookieParser());

sequelize.authenticate().then(async()=>{
    await syncDatabase()
    console.log('Connection Established')
}).catch(err=>{
    console.log('unable to connect',err)
})
// app.use(UserRouter)
async function syncDatabase() {
    try {
    
      await sequelize.sync({ alter: true }); // This will create/update tables based on model definitions
      console.log('Database synchronized.');
    } catch (error) {
      console.error('Unable to sync database:', error);
    }
  }



app.listen(port,()=>{
    console.log('Server is started '+port)
})
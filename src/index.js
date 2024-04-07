import express from 'express';
// require('./db/database')
import dotenv from 'dotenv'
import sequelize from './db/database.js';
const app=express()
dotenv.config()

const port=process.env.PORT || 3000


app.use (express.json())
sequelize.authenticate().then(()=>{
    console.log('Connection Established')
}).catch(err=>{
    console.log('unable to connect',err)
})
// app.use(UserRouter)




app.listen(port,()=>{
    console.log('Server is started '+port)
})
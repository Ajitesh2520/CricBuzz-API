import express from 'express';




import adminRoutes from './routers/admin.js'
import matchRoutes from './routers/match.js'
import teamRoutes from './routers/team.js'
import playerRoutes from './routers/player.js'

import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
import sequelize from './db/database.js';
import './models/associations.js'
const app=express()

dotenv.config()

const port=process.env.PORT || 5000


app.use(express.json())
app.use(cookieParser());
app.use('/api/admin',adminRoutes)
app.use('/api/match',matchRoutes)
app.use('/api/team',teamRoutes)
app.use('/api/player',playerRoutes)


sequelize.authenticate().then(async()=>{
    await syncDatabase()
    console.log('Connection Established')
}).catch(err=>{
    console.log('unable to connect',err)
})

async function syncDatabase() {
    try {
    
      await sequelize.sync({ alter: true }); 
      console.log('Database synchronized.');
    } catch (error) {
      console.error('Unable to sync database:', error);
    }
  }



app.listen(port,()=>{
    console.log('Server is started '+port)
})
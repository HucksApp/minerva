import dotenv from 'dotenv'
import  Sequelize from 'sequelize'
import express from 'express'   



import { connectDbUsingSequelize }  from './db/connectDb.mjs'
import { runDbConnectTest } from './tests/dbTests.mjs'
import  Inbox  from './db/Model/inboxModel.mjs'


dotenv.config()

const PORT = 3000;



const db =  connectDbUsingSequelize(  Sequelize, "postgres", process.env  )


runDbConnectTest( db ).then(()=>{

    Inbox.startInbox ( Inbox,db,Sequelize )

    const minervaMail = express();

    

























minervaMail.listen(PORT, ()=> console.log(`MINERVAL_MAIL LISTENING ON ${PORT}`))


}).catch(err => console.log( err ))


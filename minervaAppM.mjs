import dotenv from 'dotenv'
import  Sequelize from 'sequelize'
import { connectDbUsingSequelize }  from './db/connectDb.mjs'
import { runDbConnectTest } from './tests/dbTests.mjs'
import  Inbox  from './db/Model/inboxModel.mjs'


dotenv.config()






const db =  connectDbUsingSequelize(  Sequelize, "postgres", process.env  )


runDbConnectTest( db ).then(()=>{

    Inbox.startInbox ( Inbox,db,Sequelize )

}).catch(err => console.log( err ))


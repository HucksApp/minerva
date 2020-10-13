import dotenv from 'dotenv'
import  Sequelize from 'sequelize'



import { connectDbUsingSequelize }  from './connectDb.mjs'
import { runDbConnectTest } from '../tests/dbTests.mjs'
import configRelation from './configureDb.mjs'

import  Users  from './Model/usersModel.mjs'
import  Inbox  from './Model/inboxModel.mjs'
import  Sentbox  from './Model/sentBoxModel.mjs'
import  Deletebox  from './Model/deleteBoxModel.mjs'
import  Filebox  from './Model/fileBoxModel.mjs'


dotenv.config()





export default async function createDb (){


    const db =  connectDbUsingSequelize(  Sequelize, "postgres", process.env  )

    await runDbConnectTest( db )

        Users.startUserbox( Users,db,Sequelize )
        Inbox.startInbox ( Inbox,db,Sequelize )
        Sentbox.startSentbox( Sentbox,db,Sequelize )
        Deletebox.startDeletebox( Deletebox,db,Sequelize )
        Filebox.startFilebox( Filebox,db,Sequelize )

        //User Relations
        let boxArray = [ Inbox,Sentbox,Deletebox,Filebox ] ;
        let relList = [] ;

        boxArray.forEach( box=>{



        let userForeignKeys = {
                hasRel:'hasMany',
                belongRel:'belongsTo',
                fromModel:Users,
                toModel:box ,
                field:{
                    foreignKey: 'userId'
                    }
        }
        relList.push(userForeignKeys)



    });


    configRelation( relList ) ;



}
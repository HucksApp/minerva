import express from 'express'   

import session from 'express-session'
import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'


import OAuthServer  from 'express-oauth-server'
import { model } from '../../Authentications/authModel.mjs'


import signinUser from './userHandler.mjs'
import mailApp from  './mailRoutes/mailRoute.mjs'


const userRoutes = express.Router();


//setting is needed
userRoutes.use(cors())

//setting is needed
userRoutes.use(helmet())

userRoutes.oauth = new OAuthServer(
                                {
                                    model,
                                    accessTokenLifetime:345600000,
                                    allowEmptyState:false,
                                    

                                }
)


userRoutes.use(session(
                        {
                            secret:process.env.SESSION_SECREAT,
                            //genid: req =>  genuuid(), //  session IDs
                            rolling: false,
                            resave:false,
                            saveUninitialized:true,
                            cookie:{
                                secure:false,
                                httpOnly:false,
                                path:'/',
                                maxAge:345600000 //4 days in ms
                            }
                        }
))



userRoutes.use(bodyParser.urlencoded({ extended: false }))
userRoutes.use(bodyParser.json())


userRoutes.post('/', signinUser)
userRoutes.use('/mail', mailApp)


export default userRoutes;
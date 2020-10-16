import express from 'express'   

import session from 'express-session'

import maillRoutes from  './mailRoutes/mailRoute.mjs'


const userRoutes = express.Router();

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


userRoutes.use('/mail', maillRoutes)


export default userRoutes;
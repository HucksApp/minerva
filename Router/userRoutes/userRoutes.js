import express from 'express'   

import session from 'express-session'

import maillRoutes from  './mailRoutes/mailRoute.mjs'


const userRoutes = express.Router();

userRoutes.use(session(
                        {
                            secret:process.env.SESSION_SECREAT,
                            cookie:{
                                secure:false,
                                httpOnly:false,
                                path:'/user',
                                maxAge:345600000 //4 days in ms
                            }
                        }
))


userRoutes.use('/mail', maillRoutes)



export default userRoutes;
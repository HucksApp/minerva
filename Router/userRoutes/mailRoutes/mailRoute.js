import express from 'express'   
import inboxRouter from './inbox/inbox.mjs'
import sentboxRouter from './inbox/sentbox.mjs'


const maillRoutes = express.Router();



maillRoutes.use('user/mail', ()=>{

                
})


maillRoutes.use('/inbox', inboxRouter)
maillRoutes.use('/sentbox', sentboxRouter)





//General mail route

//signIn signOut


export default maillRoutes;
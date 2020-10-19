import express from 'express'   
import inboxRouter from './inbox/inbox.mjs'
//import sentboxRouter from './inbox/sentbox.mjs'


const mailApp = express();


/*
maillRoutes.use('/mail', ()=>{

                
})

*/


mailApp.use('/inbox', inboxRouter)
//maillRoutes.use('/sentbox', sentboxRouter)





//General mail route

//signIn signOut


export default mailApp;
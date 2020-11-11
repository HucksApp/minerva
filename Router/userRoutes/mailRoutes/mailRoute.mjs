import express from 'express'   
import inboxRouter from './inbox/inbox.mjs'
import sentboxRouter from './sentbox/sentbox.mjs'
import deleteboxRouter from './deletebox/deletebox.mjs'
import fileRouter from './filebox/fileRoutes.mjs'

const mailApp = express();


mailApp.use('/inbox', inboxRouter)
mailApp.use('/sentbox', sentboxRouter)
mailApp.use('/deletebox', deleteboxRouter)
mailApp.use('/files', fileRouter)







//General mail route

//signIn signOut


export default mailApp;
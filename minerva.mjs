import express from 'express'   
import createDb from './db/createDb.mjs'
import  mainRoutes from './Router/mainRoutes.mjs'



const minervaApp = express();

const PORT = 3000;



createDb().then(()=>{

minervaApp.use( mainRoutes )


minervaApp.listen(PORT, ()=> console.log(`MINERVAL_MAIL LISTENING ON ${PORT}`))

})


    





























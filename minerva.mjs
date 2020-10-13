import express from 'express'   
import createDb from './db/createDb.mjs'




const minervaMail = express();

const PORT = 3000;


createDb().then(()=>{



minervaMail.listen(PORT, ()=> console.log(`MINERVAL_MAIL LISTENING ON ${PORT}`))


})


    





























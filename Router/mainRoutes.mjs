import express from 'express'   

import userRoutes from  './userRoutes/userRoutes.mjs'

const mainRoutes = express.Router();

mainRoutes.use('/user',userRoutes)



export default mainRoutes;
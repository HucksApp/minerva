import express from 'express'   
import { getDeleteboxHandler, postDeleteboxHandler, deleteDeleteboxHandler } from './handler.mjs'

const deleteboxRoutes = express.Router();


deleteboxRoutes.get('/', getDeleteboxHandler)
deleteboxRoutes.post('/', postDeleteboxHandler)
deleteboxRoutes.delete('/',deleteDeleteboxHandler)




export default deleteboxRoutes;
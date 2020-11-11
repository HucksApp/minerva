import express from 'express'   
import { getInboxHandler, postInboxHandler, deleteInboxHandler } from './handler.mjs'

const inboxRoutes = express.Router();


inboxRoutes.get('/', getInboxHandler)
inboxRoutes.post('/', postInboxHandler)
inboxRoutes.delete('/',deleteInboxHandler)



export default inboxRoutes;
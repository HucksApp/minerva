import express from 'express'   
import { getInboxHandler } from './handler.mjs'

const inboxRoutes = express.Router();


inboxRoutes.get('/', getInboxHandler)

//inboxRouter.post('/')
//inboxRouter.delete('/')





export default inboxRoutes;
import express from 'express';
import { getSentboxHandler, postSentboxHandler, deleteSentboxHandler  } from './handler.mjs'
 
const sentboxRouter = express.Router()


sentboxRouter.get('/', getSentboxHandler)
sentboxRouter.post('/', postSentboxHandler)
sentboxRouter.delete('/', deleteSentboxHandler)


export default sentboxRouter;






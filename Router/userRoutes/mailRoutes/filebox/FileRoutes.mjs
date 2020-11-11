import express from 'express'
import { getFileboxHandler, postFileHandler, deleteFileboxHandler } from './handler.mjs'
import multer from 'multer';
import path from 'path'




const fileRouter = express.Router();

const __dirname = path.resolve();

fileRouter.use('/uploads', express.static(path.join( __dirname, '/uploads')));
 
const storage = multer.diskStorage(

                            {
                                destination: ( req, file, cb )=>{
                                        cb(null, 'uploads' );

                                              },

                                    
                                filename: (req, file, cb)=>{
                                        
                                            const uniqueSuffix = '-' + Date.now() + '-' + Math.round(Math.random() * 1E9)
                                            console.log(file)

                                            cb(null, file.originalname + uniqueSuffix) 
                                             }

                                

                            }
)



let upload = multer(
                    {
                        storage
                    }
)



fileRouter.get('/', getFileboxHandler)
fileRouter.post('/', upload.array( 'files', 100),postFileHandler)
fileRouter.delete('/', deleteFileboxHandler)




export default fileRouter;


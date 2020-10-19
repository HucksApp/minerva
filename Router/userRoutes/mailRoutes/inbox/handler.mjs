/*
import  Users  from '../../../db/Model/usersModel.mjs'
import  Inbox  from '../../../db/Model/inboxModel.mjs'
import  Sentbox  from '../../../db/Model/sentBoxModel.mjs'
import  Deletebox  from '../../../db/Model/deleteBoxModel.mjs'
import  Filebox  from '../../../db/Model/fileBoxModel.mjs'



*/




export const getInboxHandler = (req, res) =>{

    if (req.session){
        res.json(req.session)
    }else{
        res.send('Session Not Working')
    }

}

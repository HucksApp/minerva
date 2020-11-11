import  Inbox  from '../../../../db/Model/inboxModel.mjs'
import { matchFileToMessage } from '../../../../workers/fileWorker.mjs'
import Filebox from '../../../../db/Model/fileBoxModel.mjs'







export const getInboxHandler = async (req, res) =>{

    if (req.session.userId ){
        console.log(req.session.userId)

    let inboxMessages =  await  Inbox.getInbox( req.session.userId )

    const fileList = await Filebox.getFiles( req.session.userId )

        const updatedInbox =  matchFileToMessage(inboxMessages, fileList) // atach the files to the right message
        
        res.status(200).json({ message:'Inbox Messages', validity: true, updatedInbox })

    }else{
        res.send('Session Error !!!!!')
    }

}






export const postFileHandler = async (req, res) => { 

    if (req.session.userId ){
        console.log('Body',req.body.toString('utf8'))

        Filebox.addFiles( { ...req.body } )

        res.status(200).json( { message:'Inbox Messages Updated', validity: true } )

    }else{
        res.send('Session Error !!!!!')
    }

}






export const postInboxHandler = async (req, res) =>{

    if (req.session.userId ){
        console.log(req.body)
       Inbox.saveToInbox( { userId:req.session.userId , ...req.body    } )

        res.status(200).json( { message:'Inbox Messages Updated', validity: true } )
    }else{
        res.send('Session Error !!!!!')
    }

}







export const deleteInboxHandler = async (req, res) =>{

    if (req.session.userId ){
        const { messageId } = req.body
        const userId = req.session.userId
        console.log('Hereee')
        Inbox.deleteFromInbox( { userId, messageId } )
        res.status(202).json( { message:'Inbox Message Deleted', validity: true } )
    }else{
        res.send('Session Error !!!!!')
    }

}

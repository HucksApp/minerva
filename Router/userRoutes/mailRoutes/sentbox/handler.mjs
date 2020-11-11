
import  Sentbox  from '../../../../db/Model/sentBoxModel.mjs'









export const getSentboxHandler = async (req, res) =>{

    if (req.session.userId ){

    let sentboxMessages =  await  Sentbox.getSentbox( req.session.userId )
        res.status(200).json({ message:'Sentbox Messages', validity: true, sentboxMessages })

    }else{
        res.send('Session Error !!!!!')
    }

}










export const postSentboxHandler = async (req, res) =>{

    if (req.session.userId ){

    Sentbox.addToSentbox( { userId:req.session.userId , ...req.body  }  )
        res.status(200).json({ message:'Sentbox Messages Updated', validity: true })

    }else{
        res.send('Session Error !!!!!')
    }

}







export const deleteSentboxHandler = async (req, res) =>{

    if (req.session.userId ){

            const { messageId } = req.body
            const userId = req.session.userId

    Sentbox.deleteFromSentbox( { userId, messageId }  )
        res.status(200).json({ message:'Sentbox Messages Updated', validity: true })

    }else{
        res.send('Session Error !!!!!')
    }

}

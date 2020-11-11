
import  Deletebox  from '../../../../db/Model/deleteBoxModel.mjs'









export const getDeleteboxHandler = async (req, res) =>{

    if (req.session.userId ){

    let deleteboxMessages =  await  Deletebox.getDeletebox( req.session.userId )
        res.status(200).json({ message:'Deletebox Messages', validity: true, deleteboxMessages })

    }else{
        res.send('Session Error !!!!!')
    }

}










export const postDeleteboxHandler = async (req, res) =>{

    if (req.session.userId ){

        Deletebox.addToDeletebox( { userId:req.session.userId , ...req.body    }   )
        res.status(200).json({ message:'Sentbox Messages Updated', validity: true })

    }else{
        res.send('Session Error !!!!!')
    }

}







export const deleteDeleteboxHandler = async (req, res) =>{

    if (req.session.userId ){

        const { messageId } = req.body
        const userId = req.session.userId

            Deletebox.deleteFromDeletebox( { userId, messageId } ) 
        res.status(202).json({ message:'Deletebox Messages Updated', validity: true })

    }else{
        res.send('Session Error !!!!!')
    }

}


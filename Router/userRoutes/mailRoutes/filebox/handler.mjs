import Filebox from '../../../../db/Model/fileBoxModel.mjs'





export const getFileboxHandler = async (req, res) => {

    if (req.session.userId ){
        console.log(req.session.userId)

        const fileList = await Filebox.getFiles( req.session.userId )

        res.status(200).json({ message:'Filebox Messages', validity: true, fileList })

    }else{

        res.send('Session Error !!!!!')
    }
}









export const postFileHandler = async (req, res, next) => { 
     console.log( req.files ) 

    if (req.session.userId ){
        //console.log(req)
        console.log( req.file ) 

        Filebox.addFiles( { ...req.body } )

        res.status(200).json( { message:'Filebox Messages Updated', validity: true } )

    }else{
        res.send('Session Error !!!!!')
    }

}







export const deleteFileboxHandler = async (req, res) =>{

    if (req.session.userId ){
        const { messageId } = req.body
        const userId = req.session.userId

        Filebox.deleteFile( { userId, messageId } )
        
        res.status(202).json( { message:'Filebox Message Deleted', validity: true } )
    }else{
        res.send('Session Error !!!!!')
    }

}


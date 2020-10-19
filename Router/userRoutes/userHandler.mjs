import User from '../../db/Model/usersModel.mjs'



export default async function signinUser (req, res){

    if(req.body){

        const { email, password } = req.body;  
      const user =  await User.getUser({email, password})
      if( user ){
        const token = req.oauth.token()

        res.status(200).json({message:'Success', validity: true, user })
      }else
        res.status(200).json({message:'User Do Not Exists', validity: false })
    }
    


}
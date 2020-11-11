import Users from '../../db/Model/usersModel.mjs'

import { encrypt_password, compare_password } from '../../Encryption/encrypt.mjs'




export async function signUser (req, res){

    if(req.body){

        const { email, password, newUser  } = req.body;  
      const user =  await Users.getUser({ email })
      if( user && !newUser ){

        let isUser =  await  compare_password(password, user['hashedPassword'])
        if (isUser){
           
          req.session.userId = user['userId']
         console.log(req.session.id,req.session.userId)
        //sign in
  
          res.status(200).json({ message:'Session Created', validity: true, user })

        }else{
          res.status(200).json({ message:'Invalid Credentials', validity: false})
        }

       
      }else if (!user && newUser){
        const { firstName, lastName  } = req.body;
        //new user sign up
    
        let hashedPassword = await encrypt_password( password )

        const user = await Users.addUser( { firstName, lastName,  email,  hashedPassword } )
        const token =  req.oauth.token()
        req.session.id = token
        console.log(token)


        res.status(200).json( { message:'Session Created', validity: true, user } )


      }else if (user && newUser){

        res.status(302).json( { message:'Bad Registration Credentials', validity: false } )


      }else
        res.status(400).json( { message:'User Do Not Exists', validity: false } )
    }

    


}
2


export async function logoutUser (req, res){

              req.session.destroy(
                        ()=>
               res.json({ message:'Session Terminated ', validity:false })
              )
}
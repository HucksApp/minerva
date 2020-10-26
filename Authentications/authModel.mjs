import Users from '../db/Model/usersModel.mjs'


export const model = {


    getClient: (client_id, Client_secret)=>{
        console.log(here)
    },


    getUser:async (id)=>{
       let  user = await Users.getUserWithId(id)
       if(user){
            return user
       }else{
           return false
       }
    },

    saveAccessToken:(token, client, user)=>{

    },

    getAccessToken: (id)=>{
        console.log('here')
    },

    
    saveAuthorizationCode: ()=>{
        console.log('here')
    }

}

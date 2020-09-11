import pkg from 'sequelize';





const { Model,DataTypes } = pkg;

const inboxTable = async ( Inbox , db, Sequelize  )=> {


   await Inbox.init({

        messageId:{
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                unique: true,
                primaryKey: true
        },

        fromEmail: {
            type: DataTypes.STRING(200),
            allowNull: false,
            isEmail: true,

        },
        toEmail:{
            
            type: DataTypes.STRING(200),
            allowNull: false,
            isEmail: true
            // add the referenced table first ---->  User
            /*
            ,references:{
                model: 'User',
                key:'username'
            }*/
            
        },
        subject:{
            type: DataTypes.STRING(150),
            allowNull: true
           
        },
        message: {
            type: DataTypes.STRING(600),
            allowNull: false,
        },
        read:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
            
        
    
     
    },{ sequelize: db, modelName: 'Inbox' })

    // Create only if it Exists
    
await Inbox.sync( { alter: true } )


}





export default class Inbox extends Model

{


// define extra method for model to posses
static startInbox ( Inbox, db, Sequelize  ){
            //Initialise Table
 inboxTable( Inbox, db, Sequelize ).catch( error => console.log( error ) )

}

getAllInbox(){

// get all selected messages

// get  one selected message

//get All message



}


saveToInbox(){

// save single or  multiple to messages to inbox


}

deleteFromInbox(){

// delete single or multiple selected  messages from inbox

// NOTE::   -> save deleted mesage to DeleteBox


}







}







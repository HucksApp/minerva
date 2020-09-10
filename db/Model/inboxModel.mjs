
import { Sequelize, DataTypes, Model } from 'Sequelize'




const inboxTable = async ( Inbox , DataTypes  )=> {


    Inbox.init({

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
            isEmail: true,
            ForeignKey: true
        },
        subject:{
            type: DataTypes.STRING(150),
           
        },
        message:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        read: {
            type: DataTypes.STRING(600),
            allowNull: false,
        }
            
        
    
     
    },{ sequelize, modelName: 'inbox' })

    // Create only if it Exists
    
await Inbox.sync( { alter: true } )


}





class Inbox extends Model

{
// define extra method for model to posses

}



inboxTable(Inbox, DataTypes)




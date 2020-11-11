import pkg from 'sequelize';





const { Model, DataTypes } = pkg;

const inboxTable = async (Inbox, db, Sequelize) => {


    await Inbox.init({

        messageId: {
            //related to file model if attachment file is true 

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
        /*
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
        },*/
        toEmail: {

            type: DataTypes.STRING(200),
            allowNull: false,
            isEmail: true

        },
        subject: {
            type: DataTypes.STRING(150),
            allowNull: true

        },
        attachmentFile: {
            // related to  file model if true

            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        message: {
            type: DataTypes.STRING(600),
            allowNull: false,
        },
        read: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }




    }, { sequelize: db, modelName: 'inbox' })






    // Create only if it Exists

    await Inbox.sync({ alter: true })


}





export default class Inbox extends Model {


    // define extra method for model to posses
    static startInbox(Inbox, db, Sequelize) {
        //Initialise Table
        inboxTable(Inbox, db, Sequelize).catch(error => console.log(error))

    }


    // Admin priviledge alone
    static  async getAllInbox() {

        let inbox = await Inbox.findAll()

        return inbox


    }




    static async getInbox( id ) {

        let inbox = await Inbox.findAll({
            where: {
                userId: id
            }
        })

        return inbox

    }




    static saveToInbox(data) {
        // save single 

        Inbox.create(data)

    }





    static deleteFromInbox({ userId, messageId }) {

        // delete single or multiple selected  messages from inbox

        // NOTE::   -> save deleted mesage to DeleteBox

        Inbox.destroy(
            {
                where: {
                    messageId,
                    userId
                }
            }
        )


    }







}







import pkg from 'sequelize';





const { Model, DataTypes } = pkg;

const sentBoxTable = async (Sentbox, db, Sequelize) => {


    await Sentbox.init({

        messageId: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            unique: true,
            primaryKey: true
        },

        email: {
            type: DataTypes.STRING(200),
            allowNull: false,
            isEmail: true,

        },
        toEmail: {

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
        subject: {
            type: DataTypes.STRING(150),
            allowNull: true

        },
        message: {
            type: DataTypes.STRING(600),
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }




    }, { sequelize: db, modelName: 'sentbox' })

    // Create only if it Exists

    await Sentbox.sync({ alter: true })


}





export default class Sentbox extends Model {


    // define extra method for model to posses
    static startSentbox(Sentbox, db, Sequelize) {
        //Initialise Table
        sentBoxTable(Sentbox, db, Sequelize).catch(error => console.log(error))

    }

    async getAllSentbox() {

        // get all selected messages

        // get  one selected message

        //get All message

        let sentMessages = await Sentbox.findAll()
        return sentMessages

    }



    async getSentbox(id) {
        let sentMessages = await Sentbox.findAll(
            {
                where: {
                    messageId: id
                }
            }
        )
        return sentMessages
    }



    addToSentbox(data) {

        // save single or  multiple to messages to sentbox
        if (Array.isArray(data)) {

            for (obj in data)
                Sentbox.create(obj)

        } else {
            Sentbox.create(data)
        }


    }

    deleteFromSentbox(ids) {

        // delete single or multiple selected  messages from sentbox

        // NOTE::   -> save deleted mesage to DeleteBox
        if (Array.isArray(ids)) {

            for (id in ids)
                Sentbox.destroy(
                    {
                        where: {
                            messageId: id
                        }
                    }
                )

        } else {

            Sentbox.destroy(
                {
                    where: {
                        messageId: id
                    }
                }
            )

        }





    }







}







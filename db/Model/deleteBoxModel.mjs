import pkg from 'sequelize';



//

const { Model, DataTypes } = pkg;

const startDeleteboxTable = async (Deletebox, db, Sequelize) => {


    await Deletebox.init({

        messageId: {
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
        toEmail: {

            type: DataTypes.STRING(200),
            allowNull: false,
            isEmail: true

        }
        /*,
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
        }*/
        ,

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




    }, { sequelize: db, modelName: 'deletebox' })

    // Create only if it Exists

    await Deletebox.sync({ alter: true })


}





export default class Deletebox extends Model {


    // define extra method for model to posses
    static startDeletebox(Deletebox, db, Sequelize) {
        //Initialise Table
        startDeleteboxTable(Deletebox, db, Sequelize).catch(error => console.log(error))

    }

    static async getAllDeletebox() {

        //get All message
        let deletedMessages = await Deletebox.findAll()
        return deletedMessages


    }

    static  async getDeletebox(id) {

        //get All message
        let deletedMessages = await Deletebox.findAll(

            {
                where: {
                    userUserId: id
                }
            }
        )
        return deletedMessages


    }


    static async updateTable (toUpdateWith, whereToUpdate)
    
    {
        Deletebox.update(toUpdateWith,
                                {
                                    where:{
                                        ...whereToUpdate
                                    }
                                } 
                        )


    }








    static   addToDeletebox(data) {
        // save single or  multiple to messages to deletebox
        if (Array.isArray(data)) {
            for (obj in data)
                Deletebox.create(obj)

        } else {
            Deletebox.create(data)
        }

    }

    static  deleteFromDeletebox({ userId, messageId }) {

        // delete single or multiple selected  messages from deletebox
        if (Array.isArray(messageId)) {

            for (id in messageId)
                Deletebox.destroy(
                    {
                        where: {
                            messageId: id,
                            userUserId: userId
                        }
                    })

        } else {
            Deletebox.destroy(
                {
                    where: {
                        messageId,
                        userUserId: userId
                    }
                })
        }


    }



}






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

        },

        email: {
            type: DataTypes.STRING(200),
            allowNull: false,
            isEmail: true,

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

    async getAllDeletebox() {

        //get All message
        let deletedMessages = await Deletebox.findAll()
        return deletedMessages


    }

    async getDeletebox(id) {

        //get All message
        let deletedMessages = await Deletebox.findAll(

            {
                where: {
                    messageId: id
                }
            }
        )
        return deletedMessages


    }








    addToDeletebox(data) {
        // save single or  multiple to messages to deletebox
        if (Array.isArray(data)) {
            for (obj in data)
                Deletebox.create(obj)

        } else {
            Deletebox.create(data)
        }

    }

    deleteFromDeletebox(ids) {

        // delete single or multiple selected  messages from deletebox
        if (Array.isArray(ids)) {

            for (id in ids)
                Deletebox.destroy(
                    {
                        where: {
                            messageId: id
                        }
                    })

        } else {
            Deletebox.destroy(
                {
                    where: {
                        messageId: ids
                    }
                })
        }


    }



}






import pkg from 'sequelize';





const { Model, DataTypes } = pkg;

const fileBoxTable = async (Filebox, db, Sequelize) => {


    await Filebox.init({

        creationId: {
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
        messageType: {

            type: DataTypes.STRING(200),
            allowNull: false


        },
        fileType: {
            type: DataTypes.STRING(150),
            allowNull: true

        },

        fileName: {
            type: DataTypes.STRING(150),
            allowNull: false

        },
        fileContent: {
            type: DataTypes.BLOB,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }




    }, { sequelize: db, modelName: 'filebox' })



    // Create only if it Exists

    await Filebox.sync({ alter: true })


}





export default class Filebox extends Model {


    // define extra method for model to posses
    static startFilebox(filebox, db, Sequelize) {
        //Initialise Table
        fileBoxTable(filebox, db, Sequelize).catch(error => console.log(error))

    }

   static getFiles = async (id) => {


    let files = await Filebox.findAll({
        where: {
            userId: id

        }

    })

    return files

    }



  static  addFiles = data => {

        // save single or  multiple to files to filebox
        if (Array.isArray(data)) {

            for (obj in data) {

                Filebox.create(obj)

            }


        } else {

            Filebox.create(data)
        }
    }



  static  deleteFile = ( { userId, messageId } ) => {

        // delete single 

        Filebox.destroy(
            {
                where: {
                    userId,
                    messageId
                }
            }
        )


    }







}







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

        attachedId: {
            type: DataTypes.STRING(200),
            allowNull: false,
            isEmail: true,

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
        fileContent: {
            type: DataTypes.STRING(600),
            allowNull: false,
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

    getFiles = async (data) => {

        if (Array.isArray(data)) {
            let fileobjList = []
            for (obj in data) {

                let file = await Filebox.findAll({
                    where: {
                        attachedId: obj.attachedId,
                        creationId: obj.creationId

                    }

                })
                fileobjList.push(file)

            }
            return fileobjList

        } else {

            let file = await Filebox.findAll({
                where: {
                    attachedId: data.attachedId,
                    creationId: data.creationId

                }

            })

            return file
        }


    }



    addFiles =  data => {

        // save single or  multiple to files to filebox
        if (Array.isArray(data)) {

            for (obj in data) {

                 Filebox.create(obj)

            }


        } else {

             Filebox.create(data)
        }
    }



    deleteFile = id =>{

        // delete single 

         Filebox.destroy(
            {
                where: {
                    creationId: id
                }
            }
        )


    }







}







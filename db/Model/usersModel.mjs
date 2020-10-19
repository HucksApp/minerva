import pkg from 'sequelize';




const { Model, DataTypes, Op } = pkg;

async function startUserTable(Users, db, Sequelize) {

    await Users.init({

        userId: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            unique: true,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        hashedPassword: {
            type: DataTypes.STRING(100),
            allowNull: false
            // ,is: /^[0-9a-f]{64}$/i
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW

        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
        },
        adminRights: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }


    }, { sequelize: db, modelName: 'users' })




    // Create only if it Exists

    await Users.sync({ alter: true })


}





export default class Users extends Model {

    static Op = Op

    static startUserbox(Users, db, Sequelize) {

        startUserTable(Users, db, Sequelize).catch(error => console.log(error))
    }


    static addUser = user => {
        // add user
        Users.create(user)
    }


    static deleteUser = id => {
        //delete user
        Users.destroy(
            {
                where: {
                    userId: id
                }
            }
        )
    }

    static getUser = async ({ email, password }) => {

        //encryting and decrypting of password before storage

        //encrypt password <---> 
        let decrytedPasswd;


        const user = await Users.findOne(
            {
                where: {
                    [Op.and]: [{ hashedPassword: password }, { email }]
                }
            }
        )

        return user


    }


    // admin alone
    static getAllUsers = async () => {

        const allUser = await Users.findAll()
        return allUser


    }


}
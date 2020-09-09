


export const connectDb =  sequelize =>{

    const db = new sequelize('database', 'username', 'password', {
        host: 'localhost',
         define: {
              freezeTableName: true
             },
          
        dialect: 'mysql'
      });

      return db
}



export const runDbTest = db => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
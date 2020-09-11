
// connect sequelizer to db
export const connectDbUsingSequelize =  (sequelize, type = 'postgres', { DATABASE_HOST='localhost', DATABASE, DATABASE_USERNAME, DATABASE_PASSWORD }  ) =>{

    const db =  new sequelize( DATABASE, DATABASE_USERNAME, DATABASE_PASSWORD, {
        host: DATABASE_HOST,
         define: {
              freezeTableName: true
             },
             logging: false,  // disable logging      
              dialect: type
      });

      return db
}




// connect to db using normal mysql Driver
export const connectDbUsingMsql = async ( dbCreator )=>{

  const db = dbCreator.createConnection({

                host:"",
                user:"",
                password: ""

  })
  try{

    await db.connect()
    return db

  }
  catch (err){ 
      
    console.log(err)

}
       

}




//Create Table with sql in Nomal Driver
export const createDbTables_sql = db => {
  db.query(`
  
          CREATE TABLE IF NOT EXISTS Users(
  
  
          )
  
  
  
  
  
  
  
                      `)
  
  }
  
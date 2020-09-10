

export const connectDbUsingSequelize =  sequelize =>{

    const db = new sequelize('database', 'username', 'password', {
        host: 'localhost',
         define: {
              freezeTableName: true
             },
          
        dialect: 'mysql'
      });

      return db
}





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





export const createDbTables_sql = db => {
  db.query(`
  
          CREATE TABLE IF NOT EXISTS Users(
  
  
          )
  
  
  
  
  
  
  
                      `)
  
  }
  
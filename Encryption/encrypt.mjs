import pkg from 'bcrypt'


const { hash, compare } = pkg;


const SALT_ROUNDS = 10





export async function encrypt_password (password){
    try
    {
    let result_hash = await  hash( password,SALT_ROUNDS  )

    return result_hash
    }catch(err)
    {
        console.error(err)
    }
}





export async function compare_password (password, hashes){
    try
    {
    let result = await compare( password,hashes )

    return result // boolean
    }catch(err)
    {
        console.error(err)
    }
}



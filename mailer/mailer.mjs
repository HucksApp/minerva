
import nodemailer  from 'nodemailer'
import socks from 'socks'



 class Mailer


{
      static #transporter
            #option




    setOption( mailType="single" ){
        let pool
        switch(mailType.toLowerCase()){
            case "single":  
                pool = false                                        
                break;
            case "multiple":
                pool = true
                break;
            default :
                pool = false
                
            ;
        }


            this.#option = {
                                                        
                host : "smtp.mailtrap.io",
                port:2525,
                pool,
                auth:{
                    user:process.env.SMPT_USERNAME,
                    pass:process.env.SMTP_PASSWORD
                    }                   

                } 
            console.log(this.#option)  

    }



    useAdminAuth(){
        this.#option = { ...this.#option, tls: { rejectUnauthorized: isNotAdmin } }
    }


    useProxyl( proxy_url ){
        delete this.#option.auth
        this.#option = { ...this.#option, proxyl: proxy_url  }
    }


    useSock(){

        //needs sock configuration
        Mailer.#transporter.set('proxy_socks_module', socks);
    }


    createMailer(){
        Mailer.#transporter = nodemailer.createTransport(this.#option)
    }

    async sendText( data ){
        try{

        let info =  await Mailer.#transporter.sendMail( data )
            return info
        }
        catch ( err ){
            console.log(err)
        }
         
    }


}

export default Mailer ;


import dotenv from 'dotenv'
import Mailer from './mailer/mailer.mjs';

dotenv.config()


const mailer = new Mailer()


mailer.setOption()

mailer.createMailer()

const data = {
        from: "jimjam414@yahoo.com",
        to: "Hucks@gmail.com",
        subject: "To The Tech Geek",
        text:`
                    Hey Mr Man am Right Here Sucker.......
        
                                    `,
        html: `
                  <p style="color: red,font-weight: bolder ;">Hey Mr Man am Right Here Sucker.......  </p>     
                        
                        `
        
}



console.log( mailer.sendText(data) )

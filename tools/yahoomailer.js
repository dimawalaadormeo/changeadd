import  nodemailer from "nodemailer";


export default function sendMailYahoo(username,password,from,to,subject,text) {
    
    const emailTransporter = nodemailer.createTransport({
        host: 'smtp.mail.yahoo.com',
        service: 'yahoo',
        port: 465,
        secure: false,
        auth: {
          user: username,
          pass: password
        },
        debug: false,
        logger: true 
      });

    let info = emailTransporter.sendMail({
        from: from, // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: text, // plain text body
       
      });
}
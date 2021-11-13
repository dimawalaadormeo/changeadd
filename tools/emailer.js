"use strict";
import  nodemailer from "nodemailer";
import  dotenv from "dotenv";
import sendMailYahoo from "./yahoomailer.js"
dotenv.config();

function curry(f) { // curry(f) does the currying transform
    return function(a) {
      return function(b) {
        return f(a, b);
      };
    };
  }

function sendUsingTest(from,to,subject,text) {
    let testAccount =  nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass, // generated ethereal password
        },
      });

      let info = transporter.sendMail({
        from: from, // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: text, // plain text body
       
      });
      console.log("mesage sent");
}

export default function EmailSender(user,password,from,to,subject,text,mode) {
    
     

    
        let xuser = "";
        let  xpassword = "";
        xuser = user;
        xpassword = password;
        
        if(user === undefined)
        {
            xuser = process.env.MAIL_USER;
        }
        if(password === undefined) {
            xpassword = process.env.MAIL_PASSWORD;
        }

       
        console.log(mode);
        console.log(xuser);
        console.log(xpassword);
        switch(mode) {
            case "test":
                sendUsingTest(from,to,subject,text,mode);
            case "gmail":
                console.log("not yet");
            case "yahoo":
                sendMailYahoo(xuser,xpassword,from,to,subject,text,mode)
        }
    

     
      
    


}





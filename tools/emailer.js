"use strict";
import  emailer from "nodemailer";
import  dotenv from "dotenv";

class EmailSender {

    constructor(user,password) {
        this.user = user;
        this.password = password
    }

    constructor() {
        this.user = process.env.MAIL_USER;
        this.password = process.env.MAIL_PASSWORD;
    }
}





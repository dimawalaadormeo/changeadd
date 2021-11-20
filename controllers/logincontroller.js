import jwt from "jsonwebtoken";


import * as personinfo from "../knex/models/personinfo.js";
import bcrypt from "bcryptjs";
import  dotenv from "dotenv";

dotenv.config();

const login = async (req,res) => {
    console.log(req.body.loginInfo);
    let loginInfo = req.body.loginInfo;
    
    const result =  await personinfo.checkPassword(loginInfo.username, loginInfo.password) ;
    
    let data = JSON.parse(JSON.stringify(result));

   if (result && (await bcrypt.compare(loginInfo.password, data.password))) {
        // Create token
        const token = jwt.sign(
          { user_id: loginInfo.username },
          process.env.TOKEN_SIGN,
          {
            expiresIn: "2h",
          }
        );
        let secToken = {'token' : token}
        res.setHeader("Content-Type", "application/json");
        res.send(secToken);
        res.status(200);
    } 
    else {
        res.status(400).send("Invalid username or password ");
    }
}

export default login;
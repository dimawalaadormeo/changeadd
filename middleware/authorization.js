import jwt from "jsonwebtoken";

import  dotenv from "dotenv";

dotenv.config();

 const  verifyAccessToken = (req, res, next) => {
    
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"];
    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SIGN);
        req.user = decoded;
      } catch (err) {
        return res.status(401).send("Invalid Token");
      }
      return next();
    }

    export default verifyAccessToken;
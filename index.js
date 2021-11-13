//const express = require('express');
import express from "express";
import https from "https";
import http from "http";

import fs from "fs";

const PORT = process.env.PORT || 4005;
const SPORT = process.env.SPORT || 4006;
//const knex = require('knex.js');


const options = {
    key: fs.readFileSync("./private/key.pem"),
    cert: fs.readFileSync("./private/cert.pem")
}
const app = express();
const router = express.Router();

import * as compinfo from "./knex/models/compinfo.js";
import * as personinfo from "./knex/models/personinfo.js";
import * as comppersonaddrel from "./knex/models/comppersonaddrel.js";
import * as comppersonrel from "./knex/models/comppersonrel.js";
import * as idinfo from "./knex/models/idinfo.js";
import * as paycardinfo from "./knex/models/paycardinfo.js";
import * as personaddinfo from "./knex/models/personaddinfo.js";
import * as personidrel from "./knex/models/personidrel.js";
import * as logininfo from "./knex/models/logininfo.js";
import * as complogininfo from "./knex/models/complogininfo.js";
import bodyParser from "body-parser";


import   EmailSender  from "./tools/emailer.js"
import e from "express";



EmailSender(undefined,undefined,"moshe_rules@yahoo.com","mosheadormeo@gmail.com","Checking email sending","LOREM IPSUM","yahoo");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/addcompinfo', async (req, res) => {
    let company = req.body.company;
    await compinfo.add(company);
    res.send("ok");
});

app.post('/updatepersoninfo', async (req, res) => {
    let fields = req.body.fields;
    let filter = req.body.filter;
    console.log(fields);
    console.log(filter);
    await personinfo.update(fields, filter);
    res.send("ok");
});

app.post('/updatecompinfo', async (req, res) => {
    let fields = req.body.fields;
    let filter = req.body.filter;
    console.log(fields);
    console.log(filter);
    await compinfo.update(fields, filter);
    res.send("ok");
});

app.post('/updatecomplogininfo', async (req, res) => {
    let fields = req.body.fields;
    let filter = req.body.filter;
    console.log(fields);
    console.log(filter);
    await complogininfo.update(fields, filter);
    res.send("ok");
});

app.post('/updatecomppersonaddrel', async (req, res) => {
    let fields = req.body.fields;
    let filter = req.body.filter;
    console.log(fields);
    console.log(filter);
    await comppersonaddrel.update(fields, filter);
    res.send("ok");
});

app.post('/updatecomppersonrel', async (req, res) => {
    let fields = req.body.fields;
    let filter = req.body.filter;
    console.log(fields);
    console.log(filter);
    await comppersonrel.update(fields, filter);
    res.send("ok");
});

app.post('/updateidinfo', async (req, res) => {
    let fields = req.body.fields;
    let filter = req.body.filter;
    console.log(fields);
    console.log(filter);
    await idinfo.update(fields, filter);
    res.send("ok");
});

app.post('/updatelogininfo', async (req, res) => {
    let fields = req.body.fields;
    let filter = req.body.filter;
    console.log(fields);
    console.log(filter);
    await logininfo.update(fields, filter);
    res.send("ok");
});

app.post('/updatepaycardinfo', async (req, res) => {
    let fields = req.body.fields;
    let filter = req.body.filter;
    console.log(fields);
    console.log(filter);
    await paycardinfo.update(fields, filter);
    res.send("ok");
});

app.post('/updatepersonaddinfo', async (req, res) => {
    let fields = req.body.fields;
    let filter = req.body.filter;
    console.log(fields);
    console.log(filter);
    await personaddinfo.update(fields, filter);
    res.send("ok");
});

app.post('/updatepersonidrel', async (req, res) => {
    let fields = req.body.fields;
    let filter = req.body.filter;
    console.log(fields);
    console.log(filter);
    await personidrel.update(fields, filter);
    res.send("ok");
});

app.post('/deletepersoninfo', async (req, res) => {
    let filter = req.body.filter;
    console.log(filter);
    await personinfo.del(filter);
    res.send("ok");
});

app.post('/deletecompinfo', async (req, res) => {
    let filter = req.body.filter;
    console.log(filter);
    await compinfo.del(filter);
    res.send("ok");
});

app.post('/deletecomplogininfo', async (req, res) => {
    let filter = req.body.filter;
    console.log(filter);
    await complogininfo.del(filter);
    res.send("ok");
});

app.post('/deletecomppersonaddrel', async (req, res) => {
    let filter = req.body.filter;
    console.log(filter);
    await comppersonaddrel.del(filter);
    res.send("ok");
});

app.post('/deletecomppersonrel', async (req, res) => {
    let filter = req.body.filter;
    console.log(filter);
    await comppersonrel.del(filter);
    res.send("ok");
});

app.post('/deleteidinfo', async (req, res) => {
    let filter = req.body.filter;
    console.log(filter);
    await idinfo.del(filter);
    res.send("ok");
});

app.post('/deletelogininfo', async (req, res) => {
    let filter = req.body.filter;
    console.log(filter);
    await logininfo.del(filter);
    res.send("ok");
});

app.post('/deletepaycardinfo', async (req, res) => {
    let filter = req.body.filter;
    console.log(filter);
    await paycardinfo.del(filter);
    res.send("ok");
});

app.post('/deletepersonaddinfo', async (req, res) => {
    let filter = req.body.filter;
    console.log(filter);
    await personaddinfo.del(filter);
    res.send("ok");
});

app.post('/deletepersonidrel', async (req, res) => {
    let filter = req.body.filter;
    console.log(filter);
    await personidrel.del(filter);
    res.send("ok");
});

app.post('/addcomplogininfo', async (req, res) => {
    let companyLogin = req.body.companyLogin;
    await complogininfo.add(companyLogin);
    res.send("ok");
});

app.post('/addcomppersonaddrel', async (req, res) => {
    let companyPersonAddressRelationship = req.body.companyPersonAddressRelationship;
    await comppersonaddrel.add(companyPersonAddressRelationship);
    res.send("ok");
});

app.post('/addcomppersonrel', async (req, res) => {
    let companyPersonRelationship = req.body.companyPersonRelationship;
    await comppersonrel.add(companyPersonRelationship);
    res.send("ok");
});

app.post('/addidinfo', async (req, res) => {
    let idInformation = req.body.idInformation;
    await idinfo.add(idInformation);
    res.send("ok");
});

app.post('/addlogininfo', async (req, res) => {
    let loginInformation = req.body.loginInformation;
    await logininfo.add(loginInformation);
    res.send("ok");
});

app.post('/addpaycardinfo', async (req, res) => {
    let paymentCardInformation = req.body.paymentCardInformation;
    await paycardinfo.add(paymentCardInformation);
    res.send("ok");
});

app.post('/addpersonaddinfo', async (req, res) => {
    let personAddressInformation = req.body.personAddressInformation;
    await personaddinfo.add(personAddressInformation);
    res.send("ok");
});

app.post('/addpersonidrel', async (req, res) => {
    let personIdRelationship = req.body.personIdRelationship;
    await personidrel.add(personIdRelationship);
    res.send("ok");
});

app.post('/addpersoninfo', async (req, res) => {
    let personInformation = req.body.personInformation;
    await personinfo.add(personInformation);
    res.send("ok");
});

app.get('/:CID/:username/:password', async (req, res) => {
    const {CID, username, password} = req.params;
    const data = await complogininfo.checkPassword({
        CID: CID, 
        username: username,
        password: password
    });
    if (data) {
        res.status(200).json(data);
    }
    else {
        res.status(404).json({message: "Post not found"})
      }

});

app.get('/:field/:id', async (req, res) => { //for testing to make sure find is working
    
    const idx = req.params.id; 
    const field = req.params.field;

    const data = await compinfo.find(field, "=", idx); 
    console.log("idx");
    console.log(idx);
    console.log(data);
    if (data) {
        res.status(200).json(data);
    }
    else {
        res.status(404).json({message: "Post not found"})
      }

});

app.get('/:username', async (req, res) => {
    const username = req.params.username; 
    const data = await personinfo.checkPassword(username, "");
    if (data) {
        res.status(200).json(data);
    }
    else {
        res.status(404).json({message: "Post not found"})
      }

})

//app.listen(PORT);
app._router.stack.forEach(function(r){
    if (r.route && r.route.path){
      console.log(r.route.path)
    }
  });
http.createServer(app).listen(PORT);
https.createServer(options,app).listen(SPORT);
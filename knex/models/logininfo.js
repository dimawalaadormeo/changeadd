import knex from '../../knex.js';
import crypto from 'crypto';
import { webcrypto } from "crypto";
import brcypt from "bcryptjs";

const {subtle} = webcrypto;

const secret = 'abcdefg';

export async function find(field, comparison, item) {
    console.log(item);
    let data = knex("logininformation").select().where(field, comparison, item);
    console.log(data);
    return data
};
export const tableName = "logininformation";

export async function add(fields) { //reference for complex insert
    console.log(fields);
    fields["password"] = await SHA256(fields["password"]);
    
    knex(tableName).insert(fields).then(function (result) {
        console.log(result);
    });

}

export async function update(fields, filter) {
    console.log(fields);
    let data = knex(tableName).where(filter).update(fields).then(function (result) {
        console.log(result);
    });
}

export async function del(filter) {
    console.log(filter);
    let data = knex(tableName).where(filter).del().then(function (result) {
        console.log(result);
    });
}

async function SHA256 (input) {
    let buffer = new TextEncoder("utf-8").encode(input);
   // var subtle = crypto.;
   // let hash_buffer = await  subtle.digest("SHA-256", buffer);
   //let hash_buffer = await crypto.sub
    //let hash_array = Array.from(new Uint8Array(hash_buffer));
    //double hash it with bcrypt
    //no plaintext will be passed on network
    let hash_hex_str = await brcypt.hash(input,10);
   // let hash_hex_str = hash_array.map(byte =>
   //   ("00" + byte.toString(16)).slice(-2)).join("");

    return (hash_hex_str);
   }
 
 
 
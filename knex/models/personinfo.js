import knex from '../../knex.js';
import * as logininfo from "./logininfo.js";

export async function find(field, comparison, item) {
    console.log(item);
    let data = knex("personinformation").select().where(field, comparison, item);
    console.log(data);
    return data
};
export const tableName = "personinformation";

export async function checkPassword(username, password) {
    let data = knex(tableName).select("logininformation.password").where("username", "=", username)
.innerJoin("logininformation", "personinformation.PID", "logininformation.PID");
    console.log(data);
    return data;
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

export async function add(fields) { //complex insert
    console.log(fields);
    let pass = fields['password'];
    delete fields['password'];
    
    knex(tableName).insert(fields).then(function (result) {
        console.log(result);
        logininfo.add({PID: result, password: pass});

    });

}


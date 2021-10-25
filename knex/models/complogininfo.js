import knex from '../../knex.js';
import crypto from 'crypto';
const secret = 'abcdefg';

export async function find(field, comparison, item) {
    console.log(item);
    let data = knex("companylogininformation").select().where(field, comparison, item);
    console.log(data);
    return data
};
export const tableName = "companylogininformation";

export async function checkPassword(filter) {
    let data = knex(tableName).select("companylogininformation.password").where(filter)

    console.log(data);
    return data;
}

export async function add(fields) {
    console.log(fields);
    fields["password"] = crypto.createHmac('sha256', secret)
    .update(fields['password'])
    .digest('hex');
    
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
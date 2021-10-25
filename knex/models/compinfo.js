import knex from '../../knex.js';

export async function find(field, comparison, item) {
    console.log(item);
    let data = knex("companyinformation").select().where(field, comparison, item);
    console.log(data);
    return data
};
export const tableName = "companyinformation";

export async function add(fields) {
    console.log(fields);
    
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

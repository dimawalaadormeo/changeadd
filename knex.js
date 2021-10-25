const environment = process.env.ENVIRONMENT || 'development'
//const config = require('../knexfile.js')[environment];
import config from "./knexfile.js";
//const knex = require('knex')(config);
import knex from "knex";
export default knex(config[environment]);


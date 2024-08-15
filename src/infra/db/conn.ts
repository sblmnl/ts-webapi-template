import knex from "knex";
import dbConfig from "./config.js";

export const db = knex(dbConfig);

export const pingDb = () => db.raw("SELECT 1");

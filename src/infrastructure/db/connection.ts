import { config } from "@/app.js";
import knex from "knex";

export const db = knex({ client: "pg", connection: config.dbConnectionString });

export const pingDb = () => db.raw("SELECT 1");

import knex from "knex";
import { config } from "@/app.js";

export const db = knex({ client: "pg", connection: config.dbConnectionString });

export const pingDb = () => db.raw("SELECT 1");

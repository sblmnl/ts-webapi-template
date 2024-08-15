import fs from "node:fs";
import { config as appConfig } from "@/app.js";
import type { Knex } from "knex";

const baseDir = fs.existsSync("./src") ? "./src" : ".";

const dbConfig: Knex.Config = {
  client: "pg",
  connection: appConfig.dbConnectionString,
  migrations: {
    directory: `${baseDir}/infra/db/migrations`,
  },
  seeds: {
    directory: `${baseDir}/infra/db/seeds`,
  },
};

export default dbConfig;

import dotenv from "dotenv";
import express from "express";
import { Logger } from "tslog";

dotenv.config();
const env = process.env;

const config = {
  environment: env.ENVIRONMENT || "dev",
  port: env.PORT || 5000,
  dbConnectionString: env.DB_CONNECTION_STRING || "",
};

const logger = new Logger({ name: "ts-webapi-template" });

const app = express();

export { app, config, logger };

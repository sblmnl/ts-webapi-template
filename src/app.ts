import express from "express";
import { Logger } from "tslog";

const config = {
  port: process.env.PORT || 8080,
};

const logger = new Logger({ name: "ts-webapi-template" });

const app = express();

export { app, config, logger };

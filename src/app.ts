import express from "express";

const config = {
  port: process.env.PORT || 8080,
};

const app = express();

export { app, config };

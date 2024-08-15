import { app, config, logger } from "@/app.js";
import { db, pingDb } from "./infra/db/conn.js";

await pingDb();

if (config.environment === "dev") {
  await db.migrate.latest();
}

const server = app.listen(config.port, () => {
  logger.info(`Server started on port ${config.port}!`);
});

const onExitSignal = () => {
  logger.info("Stopping server...");

  server.close(() => {
    logger.info("Server stopped!");
    process.exit();
  });

  setTimeout(() => process.exit(1), 10000).unref();
};

process.on("SIGINT", onExitSignal);
process.on("SIGTERM", onExitSignal);

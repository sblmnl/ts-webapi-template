import { app, config, logger } from "@/app.js";

const server = app.listen(config.port, () => {
  logger.info(`Server started on port ${config.port}!`);
});

const onExitSignal = () => {
  logger.info("Exit signal received, shutting down...");
  server.close(() => {
    logger.info("Server stopped!");
    process.exit();
  });
  setTimeout(() => process.exit(1), 10000).unref();
};

process.on("SIGINT", onExitSignal);
process.on("SIGTERM", onExitSignal);

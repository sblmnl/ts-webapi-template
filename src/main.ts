import { app, config } from "@/app.js";

const server = app.listen(config.port, () => {
  console.log(`Server started on port ${config.port}!`);
});

const onExitSignal = () => {
  console.info("Exit signal received, shutting down...");
  server.close(() => {
    console.info("Server stopped!");
    process.exit();
  });
  setTimeout(() => process.exit(1), 10000).unref();
};

process.on("SIGINT", onExitSignal);
process.on("SIGTERM", onExitSignal);

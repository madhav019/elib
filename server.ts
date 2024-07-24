/* eslint-disable @typescript-eslint/no-unused-vars */
import app from "./src/app";
import { config } from "./src/config/config";
import connectDB from "./src/config/db";

const startServer = async () => {
  await connectDB();

  const port = config.port || 3000;

  app.listen(port, () => {
    console.log("Listenting on port: ", port);
  });
};

startServer();

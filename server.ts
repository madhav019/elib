/* eslint-disable @typescript-eslint/no-unused-vars */
import app from "./src/app";
import { config } from "./src/config/config";

const startServer = () => {
  const port = config.port || 3000;

  app.listen(port, () => {
    console.log("Listenting on port: ", port);
  });
};

startServer();

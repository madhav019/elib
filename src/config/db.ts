/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from "mongoose";
import { config } from "./config";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connected to database successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.error("Error in connecting to database", err);
    });

    await mongoose.connect(config.databaseUrl as string);
  } catch (err) {
    console.error("Failed to connect to databse.", err);
    process.exit(1);
  }
};

export default connectDB;

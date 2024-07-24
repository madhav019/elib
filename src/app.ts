/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { NextFunction, Request, Response } from "express";
import createHttpError, { HttpError } from "http-errors";
import { config } from "./config/config";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app = express();

// Routes

app.get("/", (req, res, next) => {
  const error = createHttpError(400, "Something went wrong");

  throw error;

  res.json({
    message: "Welcome to elib apis",
  });
});

app.use(globalErrorHandler);

export default app;

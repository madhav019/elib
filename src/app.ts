/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { NextFunction, Request, Response } from "express";
import createHttpError, { HttpError } from "http-errors";
import { config } from "./config/config";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import userRouter from "./user/userRouter";

const app = express();
app.use(express.json());
// Routes

app.get("/", (req, res, next) => {
  res.json({
    message: "Welcome to elib apis",
  });
});

app.use("/api/users/", userRouter);

app.use(globalErrorHandler);

export default app;

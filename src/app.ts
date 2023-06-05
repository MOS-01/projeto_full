import "reflect-metadata";
import express, { Application } from "express";
import "express-async-errors";
import { userRoutes } from "./routes/user.routes";
import { handleError } from "./error";

const app: Application = express();

app.use(express.json());

app.use("/users", userRoutes);
// app.use("/contacts");
// app.use("/login");

app.use(handleError);

export default app;

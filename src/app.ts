import cors from "cors";
import "reflect-metadata";
import express, { Application } from "express";
import "express-async-errors";
import { userRoutes } from "./routes/user.routes";
import { handleError } from "./error";
import { loginRouters } from "./routes/login.routes";
import { contactRouters } from "./routes/contact.routes";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/users", userRoutes);
app.use("/contacts", contactRouters);
app.use("/login", loginRouters);

app.use(handleError);

export default app;

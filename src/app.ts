import express, { Response, Request, Application } from "express";
import v1 from "./api/v1/routes";

const app: Application = express();

// Port
const PORT: number = 5000;

// Routes config
app.use("/api/v1", v1)

// Listen app
app.listen(PORT, () => console.log(`Server start on ${PORT} port`));
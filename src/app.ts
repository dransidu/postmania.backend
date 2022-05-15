import express, { Response, Request, Application } from "express";
import MongoDB from "./config/database/mongodb.config";
import v1 from "./api/v1/routes";

const app: Application = express();

// Get database connection
MongoDB.getConnect();

// Port
const PORT: number = 5000;

// Routes config
app.use("/api/v1", v1)

// Listen app
app.listen(PORT, () => console.log(`Server start on ${PORT} port`));
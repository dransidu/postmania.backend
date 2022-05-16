import express, { Application } from "express";
import MongoDB from "./config/database/MongoDB.config";
import v1 from "./api/v1/routes";

const app: Application = express();

// Get database connection
MongoDB.getConnect();

// Port
const PORT: number = 5000;

app.use(express.json())

// Routes config
app.use("/api/v1", v1)

// Listen app
app.listen(PORT, () => console.log(`Server start on ${PORT} port`));
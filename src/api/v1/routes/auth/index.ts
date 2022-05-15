import express, { Response, Request, Router } from "express";
const router: Router = express.Router();
import admin from "./admin"

router.use("/admin", admin)

export default router;
import express, { Response, Request, Router } from "express";
const router: Router = express.Router();
import auth from "./auth/"

router.use("/auth", auth)

export default router;
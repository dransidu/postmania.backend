import express, { Response, Request, Application, Router } from "express";
const router: Router = express.Router();

router.route('/').get((req: Request, res: Response) => {
    res.send("Hello world");
})

export default router;
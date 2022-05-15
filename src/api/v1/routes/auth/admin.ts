import express, { Response, Request, Router } from "express";
const router: Router = express.Router();

router.route('/login')
    .get((req: Request, res: Response) => {
        res.send("Hello world");
    })
    .post((req: Request, res: Response) => {
        res.json({ msg: "Login request get" })
    })

export default router;
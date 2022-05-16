import express, { Response, Request, Router } from "express";
import { login, register } from "../../controllers/auth/adminController";
const router: Router = express.Router();

router.route('/login')
    .post((req: Request, res: Response) => {
        login(req, res);
    })

router.route('/register')
    .post((req: Request, res: Response) => {
        register(req, res);
    })

export default router;
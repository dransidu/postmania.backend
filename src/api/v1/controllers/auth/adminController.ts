import { Response, Request } from "express";
import AuthService from "../../servicers/AuthServices";

export const login = (req: Request, res: Response) => {
    const user = {
        email: req.body.email,
        password: req.body.password,
        // user_role: "admin"
    }

    const auth = new AuthService()
    auth.loginUser(user, (status, message) => {
        if (status == 200) {
            res.json({ Success: message })
        } else if (status == 400) {
            res.json({ Error: message })
        }
    })

}

export const register = (req: Request, res: Response) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        user_role: "admin"
    }

    const auth = new AuthService()
    auth.registerUser(user, (status, message) => {
        if (status == 201) {
            res.json({ message: "User registered succesfully" })
        } else if (status == 200) {
            res.json({ message })
        }
    })
}


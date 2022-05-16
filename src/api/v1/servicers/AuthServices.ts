import User from "../models/User";
import bcrypt from "bcrypt";

class AuthService {
    saltRounds: number = 10;

    // Authenticate user
    loginUser(user: { email: string, password: string }, serverResponse: (status: number, message: any) => void) {

        // User email address does exists
        User.findOne({ email: user.email })
            .then((userData) => {
                if (userData != null) {
                    // Check password 
                    bcrypt.compare(user.password, userData.password, (err, result) => {
                        if (result == true) {
                            serverResponse(200, "User login successfull")
                        } else {
                            serverResponse(200, "Incorrect password");
                        }
                    })
                } else {
                    serverResponse(200, "Email not found")
                }
            })
            .catch((err) => serverResponse(400, err))
    }

    // Register user
    registerUser(user: { name: string, email: string, password: string, user_role: string }, serverResponse: (status: number, message: string) => void) {

        // Password encrypt
        bcrypt.genSalt(this.saltRounds, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                // Create user 
                const newUser = new User({
                    name: user.name,
                    email: user.email,
                    password: hash,
                    user_role: user.user_role
                })

                newUser.save()
                    .then((user) => serverResponse(201, `Successfull create user ${user}`))
                    .catch((err) => serverResponse(200, `Error ${err}`))
            })
        })
    }
}

export default AuthService;
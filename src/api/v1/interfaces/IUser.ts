import UserRole from "../enums/UserRole";

interface IUser {
    name: string,
    email: string,
    password: string,
    user_role: UserRole
    created_at: Date,
    updated_at: Date
}

export default IUser;
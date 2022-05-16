import mongoose from "mongoose";
const { Schema } = mongoose;

import IUser from "../interfaces/IUser";

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 12
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
    },
    user_role: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
        immutable: false
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
})

const User = mongoose.model<IUser>("User", userSchema);

export default User;
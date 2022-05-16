import mongoose from "mongoose";

const URI: string = "mongodb://localhost:27017/postmania";

class MongoDB {
    static getConnect() {
        return mongoose.connect(URI)
            .then(() => console.log("Database connection successfull"))
            .catch((err) => console.log(`Database connection faild. ${err}`));
    }
}

export default MongoDB;


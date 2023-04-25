import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, {dbName: "backendAPI"})
    .then(() => console.log("Database Connnected"))
    .catch((err) => console.log(err));
}
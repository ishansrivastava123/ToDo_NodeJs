import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, {dbName: "backendAPI"})
    .then((c) => console.log(`Database Connnected with ${c.connection.host}`))
    .catch((err) => console.log(err));
}
import mongoose from "mongoose";
//require('dotenv').config();
const mongoKey = process.env.MONGO_DB_KEY;

export const connectDB = async() => {
    await mongoose.connect(`mongodb+srv://${mongoKey}@cluster0.k8x41.mongodb.net/FoodApp`).then(()=> console.log('DB Connected'));
}

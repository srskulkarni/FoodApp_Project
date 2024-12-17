import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://srskulkarni:0tLpg6DiT4e7jLg@cluster0.k8x41.mongodb.net/FoodApp').then(()=> console.log('DB Connected'));
}
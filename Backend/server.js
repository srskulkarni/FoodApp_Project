import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"

// app config

const app = express()
const port  = 4000

// middelware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//db connection
connectDB();

// api endpoints
app.use('/api/food', foodRouter);
app.use('/images', express.static('uploads'));

app.get("/", (req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://<srskulkarni>:<0tLpg6DiT4e7jLg>@cluster0.k8x41.mongodb.net/?
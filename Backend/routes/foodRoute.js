import express from "express"
import { addFood } from "../controller/foodController.js"
import multer from 'multer'
const app = express()
const foodRouter = express.Router();
// const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage: storage });

// Use it in the route where you handle the file upload
app.post('/upload', upload.single('file'), (req, res) => {
    try {
        console.log(req.file); // Verify if file data is being logged
        res.send('File uploaded successfully');
    } catch (error) {
        res.status(500).send('An error occurred');
    }
});


export default foodRouter;

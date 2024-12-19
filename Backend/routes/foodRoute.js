import express from 'express';
import { addFood } from '../controller/foodController.js';
import multer from 'multer';
import fs from 'fs';
import path from 'path';

const foodRouter = express.Router();

// Ensure 'uploads/' folder exists
const uploadDir = path.join('uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({
    storage: storage,
    //limits: { fileSize: 5 * 1024 * 1024 }, // Optional: Limit file size to 5MB
    fileFilter: (req, file, cb) => {
        const allowedTypes = /jpeg|jpg|png|gif/; // Accept only images
        const isValidExt = allowedTypes.test(file.originalname.toLowerCase());
        const isValidMime = allowedTypes.test(file.mimetype);

        if (isValidExt && isValidMime) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed!'));
        }
    },
});

// Route for file upload
foodRouter.post('/add', upload.single('image'), addFood);


// foodRouter.post('/add', upload.single('image'), (req, res) => {
//     console.log('File:', req.file);
//     console.log('Body:', req.body);
//     res.send('File upload test');
// });

export default foodRouter;

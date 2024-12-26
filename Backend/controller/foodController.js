import foodModel from '../models/foodModel.js';
import fs from 'fs';
const addFood = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: 'File upload failed' });
    }

    // const image_filename = req.file.filename;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: req.file.filename,
    });

    try {
        await food.save();
        res.json({ success: true, message: 'Food Added' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Error saving food' });
    }
};

// list food

const listFood = async(req,res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data :foods });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Error ' });
    }
}

const removeFood = async(req,res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: 'Food Removed' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Error' });
    }
}

export { addFood, listFood ,removeFood};

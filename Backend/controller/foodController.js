import foodModel from '../models/foodModel.js';

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
        console.error(error);
        res.status(500).json({ success: false, message: 'Error saving food' });
    }
};

export { addFood };

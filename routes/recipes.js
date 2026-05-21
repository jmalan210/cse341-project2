const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');


router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).json(recipes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



module.exports = router;
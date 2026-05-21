const Recipe = require('../models/Recipe');
const mongodb = require('../db/database');
const { ObjectId } = require('mongodb');

const getAllRecipes = async (req, res) => {
    try {
        const result = await Recipe.find();
        res.status(200).json(recipes);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
},
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
};

const getSingleRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) return res.status(404).json({ messages: 'Recipe not found' });
        res.status(200).json(recipe);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const createRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.create(req.body);
        res.status(201).json(recipe);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateRecipe = async (req, res) => {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { after: true, runValidators: true });
        if (!updateRecipe) return res.status(404).json({ message: 'Recipe not found' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteRecipe = async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!deletedRecipe) return res.status(404).json({ message: 'Recipe not found' });
    res.status(200).json({ message: 'Recipe deleted' });
  }  catch (err) {
     res.status(400).json({ message: err.message });
    }
};
  
module.exports = {
    getAllRecipes,
    getSingleRecipe,
    createRecipe,
    updateRecipe,
    deleteRecipe
}
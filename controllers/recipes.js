const Recipe = require('../models/Recipe');
const mongodb = require('../db/database');
const { ObjectId } = require('mongodb');

const getAllRecipes = async (req, res) => {
     //#swagger.tags = ['Recipes'] 
    try {
        const recipes = await Recipe.find();
        res.status(200).json(recipes);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getSingleRecipe = async (req, res) => {
     //#swagger.tags = ['Recipes'] 
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) return res.status(404).json({ messages: 'Recipe not found' });
        res.status(200).json(recipe);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const createRecipe = async (req, res) => {
     //#swagger.tags = ['Recipes'] 
    try {
        const recipe = {
            recipeName: req.body.recipeName,
            ingredients: req.body.ingredients, 
            instructions: req.body.instructions,
            time: req.body.time,
            difficulty: req.body.difficulty,
            category: req.body.category,
            servings: req.body.servings,
            favorite: req.body.favorite,
            author: req.body.author
        }
        const response = await Recipe.create(recipe);
        res.status(201).json(response);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateRecipe = async (req, res) => {
     //#swagger.tags = ['Recipes'] 
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { after: true, runValidators: true });
        if (!updateRecipe) return res.status(404).json({ message: 'Recipe not found' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteRecipe = async (req, res) => {
     //#swagger.tags = ['Recipes'] 
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
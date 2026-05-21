const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    recipeName: {type: String, required: true},
    ingredients: { type: [String], required: true },
    instructions: { type: String, required: true },
    time: { type: String, required: true },
    difficulty: { type: String, enum: ['Easy', 'Intermediate', 'Expert'],required: true },
    category: { type: String, required: true },
    servings: { type: Number, required: true },
    favorite: Boolean,
    author: String
    
});

module.exports = mongoose.model('Recipe', recipeSchema)
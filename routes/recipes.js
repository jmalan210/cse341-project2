const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipes');

/* #swagger.tags = ['Recipes'] */
router.get('/', recipesController.getAllRecipes);

/* #swagger.tags = ['Recipes'] */
router.get('/:id', recipesController.getSingleRecipe);


router.post('/', recipesController.createRecipe);

/* #swagger.tags = ['Recipes'] */
router.put('/:id', recipesController.updateRecipe);

/* #swagger.tags = ['Recipes'] */
router.delete('/:id', recipesController.deleteRecipe);

module.exports = router;
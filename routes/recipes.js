const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipes');
const validate = require('../helpers/validateRecipe')

/* #swagger.tags = ['Recipes'] */
router.get('/', recipesController.getAllRecipes);

/* #swagger.tags = ['Recipes'] */
router.get('/:id', validate.checkId, recipesController.getSingleRecipe);


router.post('/', validate.saveRecipe, recipesController.createRecipe);

/* #swagger.tags = ['Recipes'] */
router.put('/:id', validate.checkId, validate.updateRecipe, recipesController.updateRecipe);

/* #swagger.tags = ['Recipes'] */
router.delete('/:id', validate.checkId, recipesController.deleteRecipe);

module.exports = router;
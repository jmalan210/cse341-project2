const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipes');
const validate = require('../helpers/validateRecipe')
const { isAuthenticated } = require('../middleware/authenticate');

/* #swagger.tags = ['Recipes'] */
router.get('/', recipesController.getAllRecipes);

/* #swagger.tags = ['Recipes'] */
router.get('/:id', validate.checkId, recipesController.getSingleRecipe);


router.post('/', isAuthenticated, validate.saveRecipe, recipesController.createRecipe);

/* #swagger.tags = ['Recipes'] */
router.put('/:id', isAuthenticated, validate.checkId, validate.updateRecipe, recipesController.updateRecipe);

/* #swagger.tags = ['Recipes'] */
router.delete('/:id', isAuthenticated, validate.checkId, recipesController.deleteRecipe);

module.exports = router;
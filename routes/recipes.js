const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipes');

/* #swagger.tags = ['Recipes'] */
router.get('/', recipesController.getAllRecipes);

/* #swagger.tags = ['Recipes'] */
router.get('/:id', recipesController.getSingleRecipe);

/* #swagger.tags = ['Recipes']
   #swagger.description = 'Create a new recipe'
   #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        schema: {
            recipeName: 'Pizza',
            ingredients: ['cheese'],
            instructions: 'Bake it',
            time: 30,
            difficulty: 'easy',
            category: 'dinner',
            servings: 2,
            favorite: false,
            author: 'John'
        }
   }
*/
router.post('/', recipesController.createRecipe);

/* #swagger.tags = ['Recipes'] */
router.put('/:id', recipesController.updateRecipe);

/* #swagger.tags = ['Recipes'] */
router.delete('/:id', recipesController.deleteRecipe);

module.exports = router;
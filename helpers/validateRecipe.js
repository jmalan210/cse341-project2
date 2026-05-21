const { body, param, validationResult } = require('express-validator');

const saveRecipe = [
    body('recipeName').notEmpty().withMessage('Recipe name is required'),
    body('ingredients').notEmpty().isArray().withMessage('Array of ingredients required'),
    body('instructions').notEmpty().withMessage('Instructions are required'),
    body('time').notEmpty().withMessage('Time is required'),
    body('difficulty').notEmpty().isIn(['Easy', 'Intermediate', 'Expert']).withMessage('Recipe difficulty must be Easy, Intermediate, or Expert'),
    body('category').notEmpty().withMessage('Category is required'),
    body('servings').notEmpty().isNumeric().withMessage('Number of servings required and must be a number'),
    body('favorite').isBoolean().withMessage('Must be true or false'),

    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const updateRecipe = saveRecipe;

const checkId = [
    param('id').isMongoId().withMessage('Invalid recipe ID'),

    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = {
    saveRecipe, 
    updateRecipe,
    checkId
}
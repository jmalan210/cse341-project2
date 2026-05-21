const { body, param, validationResult } = require('express-validator');

const saveUser = [
    body('firstName').notEmpty().withMessage('First name is required'),
    body('lastName').notEmpty().withMessage('Last name required'),
    body('email').notEmpty().isEmail().withMessage('Valid email required'),
    body('phoneNumber').notEmpty().withMessage('Phone number is required'),
    body('role').notEmpty().isIn(['admin', 'user']).withMessage('Role must be admin or user'),
    

    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const updateUser = saveUser;

const checkId = [
    param('id').isMongoId().withMessage('Invalid user ID'),

    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = {
    saveUser, 
    updateUser,
    checkId
}
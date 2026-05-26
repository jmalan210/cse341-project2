const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const validate = require('../helpers/validateUser');
const { isAuthenticated } = require('../middleware/authenticate');


router.get('/', usersController.getAllUsers);
router.get('/:id', validate.checkId, usersController.getSingleUser);
router.post('/', isAuthenticated, validate.saveUser, usersController.createUser);
router.put('/:id', isAuthenticated, validate.checkId, validate.updateUser, usersController.updateUser);
router.delete('/:id', isAuthenticated, validate.checkId, usersController.deleteUser);



module.exports = router;
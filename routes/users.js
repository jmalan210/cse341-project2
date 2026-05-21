const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const validate = require('../helpers/validateUser');


router.get('/', usersController.getAllUsers);
router.get('/:id', validate.checkId, usersController.getSingleUser);
router.post('/', validate.saveUser, usersController.createUser);
router.put('/:id', validate.checkId, validate.updateUser, usersController.updateUser);
router.delete('/:id',validate.checkId, usersController.deleteUser);



module.exports = router;
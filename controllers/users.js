const User = require('../models/User');
// const mongodb = require('../db/database');
// const { ObjectId } = require('mongodb');
// const { get } = require('mongoose');

const getAllUsers = async (req, res) => {
    //#swagger.tags = ['Users'] 
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getSingleUser = async (req, res) => {
     //#swagger.tags = ['Users'] 
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ messages: 'User not found' });
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const createUser = async (req, res) => {
     //#swagger.tags = ['Users'] 
    try {
        const newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            role: req.body.role
        }
        const user = await User.create(newUser);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateUser = async (req, res) => {
     //#swagger.tags = ['Users'] 
    try {
        const user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            role: req.body.role
        }
        const updatedUser = await User.findByIdAndUpdate(req.params.id, user, { after: true, runValidators: true });
        if (!updatedUser) return res.status(404).json({ message: 'User not found' });
         res.status(201).json(updateUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteUser = async (req, res) => {
     //#swagger.tags = ['Users'] 
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ message: 'User deleted' });
  }  catch (err) {
     res.status(400).json({ message: err.message });
    }
};
  
module.exports = {
   getAllUsers, getSingleUser, createUser, updateUser, deleteUser
}
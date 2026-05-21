const User = require('../models/User');
const mongodb = require('../db/database');
const { ObjectId } = require('mongodb');
const { get } = require('mongoose');

const getAllUsers = async (req, res) => {
    //#swagger.tags = ['Users'] 
    try {
        const result = await User.find();
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
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateUser = async (req, res) => {
     //#swagger.tags = ['Users'] 
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { after: true, runValidators: true });
        if (!updatedUser) return res.status(404).json({ message: 'User not found' });
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
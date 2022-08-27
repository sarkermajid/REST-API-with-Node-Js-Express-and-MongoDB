const {v4: uuidv4} = require('uuid');
const User = require('../models/user.model')

const getAllUsers = async (req,res)=>{
    try {
        const allusers = await User.find();
        res.status(200).json(allusers)
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const createUser = async (req,res)=>{
    try {
        const newUser = new User({
            id: uuidv4(),
            name: req.body.name,
            age: Number(req.body.age)
        })
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        res.status(5000).send(error.message);
    }
}

const getOneUser = async (req,res)=> {
    try {
        const oneUser = await User.find({id: req.params.id})
        res.status(200).json(oneUser)
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const updateUser = async (req,res)=>{
    try {
        const oldUser = await User.findOne({id: req.params.id});
        oldUser.name = req.body.name;
        oldUser.age = Number(req.body.age);
        await oldUser.save();
        res.status(200).json(oldUser);
    } catch (error) {
        res.status(5000).send(error.message);
    }
}

const deleteUser = async (req,res)=>{
    try {
        await User.deleteOne({id: req.params.id});
        res.status(200).json({message: "User is deleted"});
    } catch (error) {
        res.status(500).json(error.message);
    }
}
module.exports = {getAllUsers, createUser , getOneUser, updateUser, deleteUser};
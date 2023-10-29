import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import bcrypt from "bcryptjs"
import { generateToken } from '../utils.js';

export const userSignin = expressAsyncHandler(async(req,res) => {
    const user = await User.findOne({email: req.body.email});

    if(user){
        if(bcrypt.compareSync(req.body.password, user.password)){
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user),
            });
            return;
        }
    }

    res.status(401).send({message: "Invalid email or password."});
})

export const registerUser = expressAsyncHandler(async (req,res) => {
    const user  = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    });

    const createdUser = await user.save();
    res.send({
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        isAdmin: createdUser.isAdmin,
        token: generateToken(createdUser),
    })
})

export const getUserById = expressAsyncHandler(async(req,res) => {
    const user = await User.findById(req.params.id);

    if(user){
        res.send(user);
    }
    else{
        res.status(404).send({
            message: 'User not found'
        })
    }
})

export const userProfile = expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      
      if (req.body.password) {
        user.password = bcrypt.hashSync(req.body.password, 8);
      }
      const updatedUser = await user.save();
      res.send({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser),
      });
    }
})
import express from 'express'
import { userSignin, userProfile, registerUser, getUserById } from '../controllers/userController.js';
import { isAuth } from '../utils.js';

const userRouter = express.Router();

userRouter.post("/signin", userSignin)

userRouter.post("/register", registerUser);

userRouter.get('/:id', getUserById);

userRouter.put('/profile', isAuth, userProfile);



export default userRouter;
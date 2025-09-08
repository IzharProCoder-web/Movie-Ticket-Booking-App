import express from "express";
import { getFavorites, getUserBookings, updateFavorite } from "../controller/userController.js";
import { protectAdmin } from '../middleware/auth.js'; 
const userRouter = express.Router();

userRouter.get('/bookings',  getUserBookings) 
userRouter.post('/update-favorite', updateFavorite) 
userRouter.get('/favorites',  getFavorites) 

export default userRouter;
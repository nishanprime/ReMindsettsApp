import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import userData from './userData.js';
import User from '../models/userModel.js';
dotenv.config();
connectDB();

export const importData = async () => {
  try {
    await User.deleteMany();

    await User.insertMany(userData);
    console.log(`Data imported`);
    process.exit();
  } catch (error) {
    console.log(error.message);
  }
};

export const destroyData = async () => {
  try {
    await User.deleteMany();

    console.log(`Data destroyed`);
    process.exit();
  } catch (error) {
    console.log(error.message);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}

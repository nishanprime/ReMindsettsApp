import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const professionalSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  insured: {
    type: Boolean,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  expertise: {
    type: String,
    required: true,
  },
  membership: {
    type: String,
    required: true,
  },
});

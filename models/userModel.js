import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const userSchema = new mongoose.Schema({
  //true means client;false means professional or therapist

  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  counselingNeededSector: {
    type: String,
    required: true,
  },
  probableOutcome: {
    type: String,
    required: true,
  },
  therapistRequirement: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

//do not use arrow function here since on doing so
//the value of this.password would be different
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
const User = mongoose.model('User', userSchema);

export default User;

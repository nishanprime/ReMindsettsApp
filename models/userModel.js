import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const userSchema = new mongoose.Schema({
  //true means client;false means professional or therapist

  fullName: {
    type: String,
    required: true,
  },
  isTherapist: {
    type: String,
    required: true,
    default: false,
  },
  username: {
    type: String,
    default: Date.now(),
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
  aspectToImprove: {
    type: [String],
  },
  desiredOutcome: {
    type: [String],
  },
  therapistGender: {
    type: String,
  },
  gender: {
    type: String,
  },
  phone: {
    type: Number,
  },
  insured: {
    type: Boolean,
  },
  bio: {
    type: String,
  },
  expertise: {
    type: String,
  },
  businessName: {
    type: String,
  },
  membership: {
    type: String,
  },
  intro: {
    type: String,
  },
  payment: {
    type: String,
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

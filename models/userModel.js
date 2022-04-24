import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  username: {
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
  password: {
    type: String,
    required: true,
  },
  city: {
    type: String,
  },
  locationId: {
    type: String,
  },
  isEligible: {
    type: Boolean,
    default: false,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
    required: true,
  },
  photo: {
    type: String,
  },
  video: {
    type: String,
  },
  gender: {
    type: String,
  },
  bio: {
    type: String,
  },
  isPublic: {
    type: String,
    default: true,
  },
  isWorker: {
    type: Boolean,
    required: true,
    default: false,
  },
  isHirer: {
    type: Boolean,
    required: true,
    default: false,
  },
  phone: {
    type: Number,
  },
  companyVat: {
    type: String,
  },
  compnayAddress: {
    type: String,
  },
  compnayPhone: {
    type: Number,
  },
  compnayPhoto: {
    type: String,
  },
  cometUid: {
    type: String,
  },
  promoCode: {
    type: String,
  },
  lastCallsViewTime: {
    type: String,
  },
  isAdmin: {
    type: String,
    default: false,
  },
  mindsett: {
    type: String,
  },
  timeZone: { type: String },
  accrediations: { type: String },
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

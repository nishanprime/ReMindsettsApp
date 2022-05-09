import asyncHandler from 'express-async-handler';
import UserModel from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

//auth the client and ultimately get the token
//POST req to /api/users/login
//access to public

const authUser = asyncHandler(async (req, res) => {
  console.log('I am in');
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.fullName,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).send({ message: 'Invalid email or password' });
  }
});

//register a new user
//POST req to /api/users/register
//access to public

const registerUser = asyncHandler(async (req, res) => {
  const {
    gender,
    therapistGender,
    fullName,
    aspectToImprove,
    desiredOutcome,
    email,
    password,
    username,
  } = req.body;

  const userExists = await UserModel.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await UserModel.create({
    gender,
    therapistGender,
    fullName,
    aspectToImprove,
    desiredOutcome,
    email,
    password,
    username,
    isTherapist: false,
  });

  if (user) {
    res.json({
      _id: user._id,
      name: user.fullName,
      username: user.username,
      email: user.email,
      isTherapist: false,
      desiredOutcome: user.desiredOutcome,
      therapistGender: user.therapistGender,
      aspectToImprove: user.aspectToImprove,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).send({ message: 'Invalid userdata' });
  }
});

//get profile of logged in client
//GET req to /api/users/profile
//private route

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await UserModel.findById(req.user._id);

  if (user) {
    res.status(200);
    res.json({
      _id: user._id,
      name: `${user.firstName} ${user.lastName}`,
      username: user.username,
    });
  } else {
    res.status(401);
    throw new Error('User not found');
  }
});

export { authUser, getUserProfile, registerUser };

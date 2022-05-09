//register a new Professional
//POST req to /api/professional/register
//access to public

import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import UserModel from '../models/userModel.js';

export const registerProfessional = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    password,
    gender,
    insured,
    bio,
    expertise,
    businessName,
    membership,
    paymentInfo,
    intro,
  } = req.body;

  const expertiseArray = [
    'Hypnobirthing',
    'Depression',
    'Eating problems',
    'Exam stress',
    'Female sexual problems',
    'Blushing',
    'Anxiety',
    'Addiction',
    'Anger management',
    'Bruxism (teeth grinding)',
    'Irritable bowel syndrome',
    'Low self-confidence',
    'Low self-esteem',
    ' Male sexual problems',
    'Obsessions and compulsions',
    'Pain management',
    'PTSD',
    'Public speaking',
    'Relationship issues',
    'Relaxation',
    'Sleep problems',
    'Sports performance',
    'Stress',
    'Stuttering',
    'Tinnitus',
    'Weight loss',
    'Insomnia',
    'Alcohol abuse',
    'Drug addiction',
    'Quit smoking',
    'Gambling addiction',
    ' Sex addiction',
    'Food addiction',
    'Fear of flying',
    'Panic attacks',
    'Phobias',
    'Fertility',
  ];

  const professionalExists = await UserModel.findOne({ email });

  if (professionalExists) {
    res.status(400);
    throw new Error('Professional account already exists');
  }

  const entryData = {
    fullName: `${firstName} ${lastName}`,
    isTherapist: true,
    email,
    password,
    gender,
    phone,
    insured,
    bio,
    expertise: expertiseArray[parseInt(expertise)],
    businessName,
    membership,
    paymentInfo,
    intro,
  };
  const professional = await UserModel.create(entryData);
  if (professional) {
    res.json({
      _id: professional._id,
      fullName: professional.fullName,
      email: professional.email,
      phone: professional.phone,
      gender: professional.gender,
      insured: professional.insured,
      bio: professional.bio,
      expertise: professional.expertise,
      businessName: professional.businessName,
      membership: professional.membership,
      paymentInfo: professional.paymentInfo,
      intro: professional.intro,
      token: generateToken(professional._id),
      isTherapist: professional.isTherapist,
    });
  } else {
    res.status(400).send({ message: 'Invalid professional data' });
  }
});

export const getAllProfessional = asyncHandler(async (req, res) => {
  const professional = await UserModel.find({ isTherapist: true }).select(
    '-password'
  );
  if (professional) {
    res.status(200);
    res.json(professional);
  } else {
    res.status(401);
    throw new Error('No prof found');
  }
});

//register a new Professional
//POST req to /api/professional/register
//access to public

import ProfessionalModel from '../models/professionalModel.js';
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
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
    payment,
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

  const professionalExists = await ProfessionalModel.findOne({ email });
  if (professionalExists) {
    res.status(400);
    throw new Error('Professional account already exists');
  }
  const entryData = {
    firstName,
    lastName,
    email,
    phone,
    password,
    gender,
    insured,
    bio,
    expertise: expertiseArray[expertise],
    businessName,
    membership,
    payment,
    intro,
  };
  console.log(entryData);
  const professional = await ProfessionalModel.create(entryData);
  if (professional) {
    res.json({
      _id: professional._id,
      firstName: professional.firstName,
      lastName: professional.lastName,
      email: professional.email,
      phone: professional.phone,
      gender: professional.gender,
      insured: professional.insured,
      bio: professional.bio,
      expertise: professional.expertise,
      businessName: professional.businessName,
      membership: professional.membership,
      payment: professional.payment,
      intro: professional.intro,
      token: generateToken(professional._id),
    });
  } else {
    res.status(400).send({ message: 'Invalid professional data' });
  }
});

export const getAllProfessional = asyncHandler(async (req, res) => {
  const professional = await ProfessionalModel.find().select('-password');
  if (professional) {
    res.status(200);
    res.json(professional);
  } else {
    res.status(401);
    throw new Error('No prof found');
  }
});

import asyncHandler from 'express-async-handler';
import UserModel from '../models/userModel.js';

//handle the uploads of images
//port req to /api/uploads/image
//access to authenticated user

const uploadImageController = asyncHandler(async (req, res) => {
  const user = await UserModel.findById(req.user._id);
  if (user) {
    res.json({
      uploaded: 'Image Successfully uploaded',
    });
  } else {
    res.status(401);
    throw new Error('Unauthorized');
  }
});

export { uploadImageController };

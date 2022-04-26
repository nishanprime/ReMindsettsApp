import asyncHandler from 'express-async-handler';
import UserModel from '../models/userModel.js';

//handle the uploads of images
//port req to /api/uploads/image
//access to authenticated user

const uploadImageController = asyncHandler(async (req, res) => {
  const user = await UserModel.findById(req.user._id);
  if (user) {
    if (req.file === undefined) return res.send('You must select a file');
    const imageUrl = `http://localhost:8000/${req.file.filename}`;
    return res.send(imageUrl);
  } else {
    res.status(401);
    throw new Error('Unauthorized');
  }
});

export { uploadImageController };

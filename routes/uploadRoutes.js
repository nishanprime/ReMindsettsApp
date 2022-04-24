import express from 'express';
import { uploadImageController } from '../controller/uploadController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/images').post(protect, uploadImageController);

export default router;

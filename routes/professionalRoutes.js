import express from 'express';
import {
  getAllProfessional,
  registerProfessional,
} from '../controller/professionalController.js';
const router = express.Router();

router.route('/register').post(registerProfessional);
router.route('/getall').get(getAllProfessional);
export default router;

import express from 'express';
import { getFileStream } from '../config/s3Config.js';
const router = express.Router();

router.get('/files/:key', (req, res) => {
  console.log(req.params.key);
  const key = req.params.key;
  const readStream = getFileStream(key);
  readStream.pipe(res);
});

export default router;

import express from 'express';
import multer from 'multer';
import multerS3 from 'multer-s3';
import path from 'path';
import { s3, uploadToS3Bucket } from '../config/s3Config.js';
import fs from 'fs';
import util from 'util';
const unlinkFile = util.promisify(fs.unlink);
const router = express.Router();
const __dirname = path.resolve();

// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename(req, file, cb) {
//     cb(
//       null,
//       `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
//     );
//   },
// });
function checkFileType(file, cb) {
  const fileTypes = /jpg|jpeg|png|mp4|mov|webm/;
  const extname = fileTypes.test(
    path.extname(file.originalname).toLocaleLowerCase()
  );
  const mimetype = fileTypes.test(file.mimetype);
  if (extname && mimetype) {
    return cb(null, true);
  } else {
    return cb(new Error('Only Images and Video(mp4) allowed '));
  }
}
// const upload = multer({
//   storage,
//   fileFilter: function (req, file, cb) {
//     checkFileType(file, cb);
//   },
// });

// router.post('/', upload.single('intro'), async (req, res) => {
//   const file = req.file;
//   const resultFromS3 = await uploadToS3Bucket(file);
//   //after uploading to s3, delete file from server
//   await unlinkFile(file.path);
//   const fullImageUrl =
//     req.protocol +
//     '://' +
//     req.get('host') +
//     '/api/downloads/files/' +
//     resultFromS3.key;
//   console.log(fullImageUrl);
//   res.send(fullImageUrl);
// });

//this uploads directly to s3 bucket
var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.BUCKET_NAME,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(
        null,
        `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
      );
    },
  }),
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});
router.post('/', upload.single('intro'), async (req, res) => {
  const key = req.file.key;
  const fullImageUrl =
    req.protocol + '://' + req.get('host') + '/api/downloads/files/' + key;
  res.send(fullImageUrl);
});

export default router;

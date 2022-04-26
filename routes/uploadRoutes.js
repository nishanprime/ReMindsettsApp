import express from 'express';
import multer from 'multer';
import path from 'path';
const router = express.Router();
const __dirname = path.resolve();
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
function checkFileType(file, cb) {
  const fileTypes = /jpg|jpeg|png|mp4|mov|webm/;
  const extname = fileTypes.test(
    path.extname(file.originalname).toLocaleLowerCase()
  );
  const mimetype = fileTypes.test(file.mimetype);
  if (extname && mimetype) {
    return cb(null, true);
  } else {
    return cb(new Error('Only Images and Video allowed'));
  }
}
const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

router.post('/', upload.single('intro'), (req, res) => {
  const fullImageUrl = req.protocol + '://' + req.get('host') + '/uploads/';
  res.send(`${fullImageUrl}${req.file.filename}`);
});

export default router;

import multer from 'multer';
import GridFsStorage from 'multer-gridfs-storage';

const storage = new GridFsStorage({
  url: process.env.MONGO_URI,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    file: (req, file) => {
      const match = ['image/jpg', 'image/png'];

      if (match.indexOf(file.mimetype) === -1) {
        const fileName = `${Date.now()}-mindsetts-${file.originalname}`;
        return fileName;
      }
      return {
        bucketName: 'photos',
        filename: `${Date.now()}-mindsetts-${file.originalname}`,
      };
    },
  },
});

export default multer({ storage });

import 'dotenv/config';
import express from 'express';
import path from 'path';
import connectDB from './config/db.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import professionalRoutes from './routes/professionalRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import fs from 'fs';
const __dirname = path.resolve();
const folderName = `${__dirname}/uploads`;
try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
  console.log('Folder already exists');
} catch (error) {
  console.log(error);
}
const app = express();

app.use(express.json());
connectDB();

app.use('/api/users', userRoutes);
app.use('/api/professional', professionalRoutes);
app.use('/api/uploads', uploadRoutes);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend/build/index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('API is up and running and kaji is gay');
  });
}

app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use(notFound);
app.use(errorHandler);
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

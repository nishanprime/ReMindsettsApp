import 'dotenv/config';
import express from 'express';
import path from 'path';
import connectDB from './config/db.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
const __dirname = path.resolve();
console.log(__dirname);
const app = express();

app.use(express.json());
connectDB();

app.use('/api/users', userRoutes);
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
app.use(notFound);
app.use(errorHandler);
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

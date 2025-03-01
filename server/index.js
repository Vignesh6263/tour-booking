import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import tourRoute from './routes/tours.js';
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';
import reviewRoute from './routes/reviews.js';
import bookingRoute from './routes/bookings.js';
import { fileURLToPath } from 'url';
import path from 'path';

dotenv.config();
const app = express();
const port = process.env.PORT || 8010; // Changed from 8000 to 8010

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

mongoose.set('strictQuery', false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.log('MongoDB connection failed:', error);
  }
};

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true })); // Specific CORS
app.use(cookieParser());
app.use('/tour-images', express.static(path.join(__dirname, 'public/tour-images')));
app.get('/', (req, res) => {
  res.send('Server running');
});
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/review', reviewRoute);
app.use('/api/v1/booking', bookingRoute);
app.get('*', (req, res) => {
  res.send('Api not found');
});

app.listen(port, () => {
  connect();
  console.log('server listening on port', port);
});
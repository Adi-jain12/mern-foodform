import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import cors from 'cors';
import mealsRoutes from './routes/mealsRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import mongoose from 'mongoose';

mongoose
	.connect(process.env.MONGODB_CONNECTION_STRING)
	.then(() => console.log('Connected'));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/v1/meals', mealsRoutes);
app.use('/api/v1/order', orderRoutes);

app.listen(4000, () => {
	console.log('Server is running');
});

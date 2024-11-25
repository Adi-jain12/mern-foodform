import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/dishes', async (req, res) => {
	try {
		const response = await fetch(
			'https://yudiz-solution.s3.ap-south-1.amazonaws.com/dishes.json'
		);
		const data = await response.json();
		res.json(data);
	} catch (error) {
		res.status(500).json({ error: 'Failed to fetch data' });
	}
});

app.listen(4000, () => {
	console.log('Server is running');
});

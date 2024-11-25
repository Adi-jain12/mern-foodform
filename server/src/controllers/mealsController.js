export const getAllMeals = async (req, res) => {
	try {
		const response = await fetch(
			'https://yudiz-solution.s3.ap-south-1.amazonaws.com/dishes.json'
		);
		const data = await response.json();
		res.json(data);
	} catch (error) {
		res.status(500).json({ error: 'Failed to fetch data' });
	}
};

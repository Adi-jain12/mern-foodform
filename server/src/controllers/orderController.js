import Order from '../models/order.js';

export const addOrder = async (req, res) => {
	try {
		const { selectedMeal, totalPerson, selectedRestuarant, selectedDishes } =
			req.body;

		if (
			!selectedMeal ||
			!totalPerson ||
			!selectedRestuarant ||
			!selectedDishes
		) {
			return res.status(400).json({ message: 'All values are required' });
		}

		const newOrder = new Order({
			mealType: selectedMeal,
			totalPerson,
			restaurant: selectedRestuarant,
			dishes: selectedDishes,
		});

		await newOrder.save();

		res
			.status(201)
			.json({ message: 'Order added successfully', order: newOrder });
	} catch (error) {
		console.error('Error adding order:', error);
		res.status(500).json({ message: 'Internal server error' });
	}
};

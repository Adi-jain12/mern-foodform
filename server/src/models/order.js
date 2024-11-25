import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
	mealType: {
		type: String,
		required: true,
	},

	totalPerson: {
		type: Number,
		required: true,
	},

	restaurant: {
		type: String,
		required: true,
	},

	dishes: [
		{
			dishId: {
				type: String,
				required: true,
			},

			name: {
				type: String,
				required: true,
			},

			quantity: {
				type: Number,
				required: true,
			},
		},
	],
});

const Order = mongoose.model('Order', orderSchema);

export default Order;

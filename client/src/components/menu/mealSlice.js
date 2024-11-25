import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	mealCategory: null,
	numberOfPeople: 0,
	selectedRestaurant: null,
	dishes: [],
};

const mealSlice = createSlice({
	name: 'meal',
	initialState,
	reducers: {
		setMealCategory(state, action) {
			state.mealCategory = action.payload;
		},

		setNumberOfPeople(state, action) {
			const number = action.payload;
			if (number > 0 && number <= 10) {
				state.numberOfPeople = number;
			}
		},

		setSelectedRestaurant(state, action) {
			state.selectedRestaurant = action.payload;
		},

		addOrUpdateDish(state, action) {
			const { dishId, name, quantity } = action.payload;

			const existingDish = state.dishes.find((dish) => dish.dishId === dishId);
			if (existingDish) {
				existingDish.quantity = quantity;
			} else {
				state.dishes.push({ dishId, name, quantity });
			}
		},

		increaseDishQuantity(state, action) {
			const dishId = action.payload;
			const item = state.dishes.find((item) => item.dishId === dishId);

			if (item) {
				item.quantity++;
			}
		},

		decreaseDishQuantity(state, action) {
			const dishId = action.payload;
			const item = state.dishes.find((item) => item.dishId === dishId);

			if (item) {
				item.quantity--;
				if (item.quantity === 0) {
					state.dishes = state.dishes.filter((dish) => dish.dishId !== dishId);
				}
			} else {
				console.error(`Dish with ID ${dishId} not found`);
			}
		},

		removeDish(state, action) {
			state.dishes = state.dishes.filter(
				(item) => item.dishId !== action.payload
			);
		},

		resetFields(state) {
			state.dishes = [];
			state.mealCategory = null;
			state.numberOfPeople = 0;
			state.selectedRestaurant = null;
		},
	},
});

export const {
	setMealCategory,
	setNumberOfPeople,
	setSelectedRestaurant,
	addOrUpdateDish,
	increaseDishQuantity,
	decreaseDishQuantity,
	removeDish,
	resetFields,
} = mealSlice.actions;

export default mealSlice.reducer;

export const getDishAddedById = (id) => (state) =>
	state.meal.dishes.find((item) => item.dishId === id)?.quantity ?? 0;

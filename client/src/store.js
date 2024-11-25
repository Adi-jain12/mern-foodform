import { configureStore } from '@reduxjs/toolkit';
import userReducer from './components/user/userSlice';
import mealReducer from './components/menu/mealSlice';

const store = configureStore({
	reducer: {
		user: userReducer,
		meal: mealReducer,
	},
});

export default store;

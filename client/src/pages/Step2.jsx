import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import RestaurantForm from '../components/forms/RestaurantForm';

const Step2 = () => {
	const [foodRestaurantDetails, setFoodRestaurantDetails] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const mealCategory = useSelector((state) => state.meal.mealCategory);

	useEffect(() => {
		const fetchDetails = async () => {
			setLoading(true);
			try {
				const response = await fetch('http://localhost:4000/dishes');
				if (!response.ok) {
					throw new Error('Failed to fetch details');
				}
				const data = await response.json();
				setFoodRestaurantDetails(data.dishes);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchDetails();
	}, []);

	useEffect(() => {
		if (mealCategory) {
			const filtered = foodRestaurantDetails
				.filter((detail) => detail.availableMeals.includes(mealCategory))
				.map((detail) => detail.restaurant);

			const uniqueRestaurants = [...new Set(filtered)];

			setFilteredRestaurants(uniqueRestaurants);
		}
	}, [mealCategory, foodRestaurantDetails]);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<div className="max-w-lg mx-auto">
			<RestaurantForm filteredRestaurants={filteredRestaurants} />
		</div>
	);
};

export default Step2;

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DishForm from '../components/forms/DishForm/DishForm';

const Step3 = () => {
	const [foodRestaurantDetails, setFoodRestaurantDetails] = useState([]);
	const [filteredDishes, setFilteredDishes] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const mealCategory = useSelector((state) => state.meal.mealCategory);
	const selectedRestaurant = useSelector(
		(state) => state.meal.selectedRestaurant
	);

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
		if (
			foodRestaurantDetails.length > 0 &&
			mealCategory &&
			selectedRestaurant
		) {
			const filtered = foodRestaurantDetails.filter(
				(dish) =>
					dish.restaurant === selectedRestaurant &&
					dish.availableMeals.includes(mealCategory)
			);
			setFilteredDishes(filtered);
		}
	}, [foodRestaurantDetails, mealCategory, selectedRestaurant]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;

	return (
		<div className="max-w-2xl mx-auto">
			{filteredDishes.length === 0 ? (
				<p>No dishes available for the selected meal and restaurant.</p>
			) : (
				<DishForm dishes={filteredDishes} />
			)}
		</div>
	);
};

export default Step3;

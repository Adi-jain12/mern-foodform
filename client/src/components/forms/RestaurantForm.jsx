import { useDispatch, useSelector } from 'react-redux';
import NextNavigation from '../navigation/NextNavigation';
import PreviousNavigation from '../navigation/PreviousNavigation';
import { setSelectedRestaurant } from '../menu/mealSlice';

const RestaurantForm = ({ filteredRestaurants }) => {
	const dispatch = useDispatch();
	const { selectedRestaurant } = useSelector((state) => state.meal);

	const handleRestaurantChange = (e) => {
		dispatch(setSelectedRestaurant(e.target.value));
	};

	return (
		<div className="px-4 py-6">
			<form method="POST">
				<div className="mb-10 flex flex-col gap-2">
					<label htmlFor="restaurant" className="">
						Please select a restaurant
					</label>
					<select
						id="restaurant"
						name="restaurant"
						className="input grow"
						value={selectedRestaurant || ''}
						onChange={handleRestaurantChange}
						required
					>
						<option value="">--Select a restaurant--</option>
						{filteredRestaurants.map((restaurant, index) => (
							<option key={index} value={restaurant}>
								{restaurant}
							</option>
						))}
					</select>
				</div>
			</form>

			<div className="flex justify-between">
				<PreviousNavigation nextPath="/step1" />
				<NextNavigation nextPath="/step3" isDisabled={!selectedRestaurant} />
			</div>
		</div>
	);
};

export default RestaurantForm;

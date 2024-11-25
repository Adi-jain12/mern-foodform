import { useDispatch, useSelector } from 'react-redux';
import { setMealCategory, setNumberOfPeople } from '../menu/mealSlice';
import NextNavigation from '../navigation/NextNavigation';
import { useState } from 'react';

const MealForm = () => {
	const dispatch = useDispatch();
	const { mealCategory, numberOfPeople } = useSelector((state) => state.meal);
	const [error, setError] = useState('');

	const handleMealChange = (e) => {
		dispatch(setMealCategory(e.target.value));
	};

	const handlePeopleChange = (e) => {
		const value = e.target.value;
		const number = parseInt(value, 10);

		if (!value) {
			setError('Number of people is required.');
		} else if (isNaN(number) || number < 1 || number > 10) {
			setError('Please enter a valid number between 1 and 10.');
		} else {
			setError('');
			dispatch(setNumberOfPeople(number));
		}
	};

	return (
		<div className="px-4 py-6">
			<h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

			<form>
				<div className="mb-10 flex flex-col gap-2">
					<label htmlFor="meal" className="">
						Please select a meal
					</label>
					<select
						id="meal"
						name="meal"
						className="input grow"
						value={mealCategory || ''}
						onChange={handleMealChange}
						required
					>
						<option value="">--Select a meal--</option>
						<option value="breakfast">Breakfast</option>
						<option value="lunch">Lunch</option>
						<option value="dinner">Dinner</option>
					</select>
				</div>

				<div className="mb-5 flex flex-col gap-2">
					<label className="">Please select the number of people</label>
					<div className="grow">
						<input
							className={`input w-full ${error ? 'border-red-500' : ''}`}
							type="number"
							name="number"
							min="1"
							max="10"
							value={numberOfPeople || ''}
							onChange={handlePeopleChange}
							required
						/>
						{error && <p className="mt-2 text-sm text-red-500">{error}</p>}
					</div>
				</div>
			</form>

			<div className="flex justify-between">
				<div></div>
				<NextNavigation
					nextPath="/step2"
					isDisabled={!mealCategory || !numberOfPeople || error}
				/>
			</div>
		</div>
	);
};

export default MealForm;

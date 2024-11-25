import PreviousNavigation from '../components/navigation/PreviousNavigation';
import ReviewItem from '../components/menu/ReviewItem';
import { useSelector } from 'react-redux';
import Button from '../ui/Button';

function Review() {
	const selectedDishes = useSelector((state) => state.meal.dishes);
	const selectedMeal = useSelector((state) => state.meal.mealCategory);
	const totalPerson = useSelector((state) => state.meal.numberOfPeople);
	const selectedRestuarant = useSelector(
		(state) => state.meal.selectedRestaurant
	);

	console.log('Order details', {
		selectedMeal,
		totalPerson,
		selectedRestuarant,
		selectedDishes,
	});

	const handleSubmit = async () => {
		const data = {
			selectedMeal,
			totalPerson,
			selectedRestuarant,
			selectedDishes,
		};

		try {
			const response = await fetch('http://localhost:4000/api/v1/order', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error('Failed to submit data');
			}

			const result = await response.json();

			window.location.href = '/success';
		} catch (error) {
			console.error('Error:', error);
			alert('There was an error submitting your data.');
		}
	};

	return (
		<div className="space-y-8 px-4 py-6">
			<div className="flex flex-wrap items-center justify-between gap-2">
				<h2 className="text-xl font-semibold">Your order details</h2>

				<div className="space-x-2">
					<span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
						In Review
					</span>
				</div>
			</div>

			<div className="space-y-4 bg-stone-200 px-6 py-5 text-md">
				<p>
					<span className="font-extrabold">Meal:</span>
					<span className="font-medium ml-1">{selectedMeal}</span>
				</p>

				<p>
					<span className="font-extrabold">No. of people:</span>
					<span className="font-medium ml-1">{totalPerson}</span>
				</p>
				<p>
					<span className="font-extrabold">Restaurant:</span>
					<span className="font-medium ml-1">{selectedRestuarant}</span>
				</p>
			</div>

			<div className="flex flex-col">
				<p className="font-extrabold text-lg mb-3">Dishes</p>
				<ul className="dive-stone-200 divide-y border-b border-t">
					{selectedDishes.map((dish) => (
						<ReviewItem key={dish.dishId} dish={dish} />
					))}
				</ul>
			</div>

			<div className="flex justify-between">
				<PreviousNavigation nextPath="/step3" />
				<Button type="primary" onClick={handleSubmit}>
					Submit
				</Button>
			</div>
		</div>
	);
}

export default Review;

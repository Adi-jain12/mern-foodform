import DishItem from './DishItem';
import PreviousNavigation from '../../navigation/PreviousNavigation';
import NextNavigation from '../../navigation/NextNavigation';
import { useSelector } from 'react-redux';

const DishForm = ({ dishes }) => {
	const totalDishes = useSelector((state) => state.meal.dishes);

	return (
		<>
			<ul className="divide-y divide-stone-200 px-2 pb-12 p-6">
				{dishes.map((dish) => (
					<DishItem key={dish.id} dish={dish} />
				))}
			</ul>

			<div className="flex justify-between">
				<PreviousNavigation nextPath="/step2" />
				<NextNavigation
					nextPath="/review"
					isDisabled={totalDishes.length === 0}
				/>
			</div>
		</>
	);
};

export default DishForm;

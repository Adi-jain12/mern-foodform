import { useDispatch } from 'react-redux';
import DishItem from './DishItem';
import PreviousNavigation from '../../navigation/PreviousNavigation';
import NextNavigation from '../../navigation/NextNavigation';

const DishForm = ({ dishes }) => {
	const dispatch = useDispatch();

	return (
		<>
			<ul className="divide-y divide-stone-200 px-2 pb-12">
				{dishes.map((dish) => (
					<DishItem key={dish.id} dish={dish} />
				))}
			</ul>

			<div className="flex justify-between">
				<PreviousNavigation nextPath="/step2" />
				<NextNavigation nextPath="/review" />
			</div>
		</>
	);
};

export default DishForm;
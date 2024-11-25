import { useDispatch } from 'react-redux';
import {
	decreaseDishQuantity,
	increaseDishQuantity,
} from '../../menu/mealSlice';
import Button from '../../../ui/Button';

const UpdateItemQuantity = ({ dishId, currentQuantity }) => {
	const dispatch = useDispatch();

	return (
		<div className="flex items-center gap-2 md:gap-3">
			<Button
				type="round"
				onClick={() => dispatch(decreaseDishQuantity(dishId))}
			>
				-
			</Button>
			<span className="text-sm font-medium">{currentQuantity}</span>
			<Button
				type="round"
				onClick={() => dispatch(increaseDishQuantity(dishId))}
			>
				+
			</Button>
		</div>
	);
};

export default UpdateItemQuantity;

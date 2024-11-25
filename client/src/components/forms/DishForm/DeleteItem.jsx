import { useDispatch } from 'react-redux';
import Button from '../../../ui/Button';
import { removeDish } from '../../menu/mealSlice';

const DeleteItem = ({ dishId }) => {
	const dispatch = useDispatch();

	return (
		<Button type="smalldanger" onClick={() => dispatch(removeDish(dishId))}>
			Delete
		</Button>
	);
};

export default DeleteItem;

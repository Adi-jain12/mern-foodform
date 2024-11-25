import { useDispatch, useSelector } from 'react-redux';
import { addOrUpdateDish, getDishAddedById } from '../../menu/mealSlice';
import UpdateItemQuantity from './UpdateItemQuantity';
import Button from '../../../ui/Button';
import DeleteItem from './DeleteItem';

const DishItem = ({ dish }) => {
	const dispatch = useDispatch();

	const { id, name, restaurant } = dish;

	const currentQuantity = useSelector(getDishAddedById(id));
	const isInCart = currentQuantity > 0;

	const handleAddToCart = () => {
		const newItem = {
			dishId: id,
			name,
			quantity: 1,
		};
		dispatch(addOrUpdateDish(newItem));
	};

	return (
		<li className="flex gap-4 py-2">
			<div className="flex grow flex-col pt-0.5">
				<p className="font-medium">{name}</p>
				<p className="text-sm capitalize italic text-stone-500">{restaurant}</p>
			</div>
			<div className="mt-auto flex items-center justify-between">
				{isInCart && (
					<div className="flex items-center gap-3">
						<UpdateItemQuantity dishId={id} currentQuantity={currentQuantity} />
						<DeleteItem dishId={id} />
					</div>
				)}
			</div>

			<div>
				{!isInCart && (
					<Button type="small" onClick={handleAddToCart}>
						Add
					</Button>
				)}
			</div>
		</li>
	);
};

export default DishItem;

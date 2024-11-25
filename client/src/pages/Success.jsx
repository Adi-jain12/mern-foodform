import Button from '../ui/Button';
import { resetFields } from '../components/menu/mealSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Success = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleResetAndNavigate = () => {
		dispatch(resetFields());
		navigate('/');
	};

	return (
		<div className="my-10 px-4 text-center sm:my-16">
			<h1 className="mb-8 text-xl font-semibold md:text-3xl">
				Your pre-order is successful. Thank You!
			</h1>
			<Button type="primary" onClick={handleResetAndNavigate}>
				Pre-order again &rarr;
			</Button>
		</div>
	);
};

export default Success;

import React from 'react';
import Button from '../ui/Button';
import { resetFields } from '../components/menu/mealSlice';
import { useDispatch } from 'react-redux';

const Success = () => {
	const dispatch = useDispatch();

	return (
		<div className="my-10 px-4 text-center sm:my-16">
			<h1 className="mb-8  text-xl font-semibold md:text-3xl">
				Your pre-order is successfull. Thank You!
			</h1>

			<Button to="/" type="primary" onClick={() => dispatch(resetFields())}>
				Pre-order again &rarr;
			</Button>
		</div>
	);
};

export default Success;
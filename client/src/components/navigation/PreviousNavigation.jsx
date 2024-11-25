import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';

const PreviousNavigation = ({ nextPath, isDisabled = false }) => {
	const navigate = useNavigate();

	const handlePrevious = () => {
		navigate(nextPath);
	};

	return (
		<div className="mt-4">
			<Button onClick={handlePrevious} disabled={isDisabled} type="primary">
				Previous
			</Button>
		</div>
	);
};

export default PreviousNavigation;

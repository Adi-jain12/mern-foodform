import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';

const NextNavigation = ({ nextPath, altText, isDisabled = false }) => {
	const navigate = useNavigate();

	const handleNext = () => {
		navigate(nextPath);
	};

	return (
		<div className="mt-4">
			<Button onClick={handleNext} disabled={isDisabled} type="primary">
				{altText || 'Next'}
			</Button>
		</div>
	);
};

export default NextNavigation;
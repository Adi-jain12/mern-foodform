import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Breadcrumb = () => {
	const location = useLocation();
	const steps = [
		{ label: 'Step 1', path: '/step1' },
		{ label: 'Step 2', path: '/step2' },
		{ label: 'Step 3', path: '/step3' },
		{ label: 'Review', path: '/review' },
	];

	const currentStepIndex = steps.findIndex(
		(step) => step.path === location.pathname
	);

	return (
		<nav className="flex items-center space-x-2 text-gray-700 font-semibold border-2 border-blue-600 py-2 px-4">
			{steps.map((step, index) => (
				<div key={index}>
					<Link
						to={step.path}
						className={`${
							currentStepIndex === index
								? 'text-blue-600 font-semibold'
								: 'hover:text-blue-400'
						}`}
					>
						{step.label}
					</Link>
					{index < steps.length - 1 && <span> / </span>}
				</div>
			))}
		</nav>
	);
};

export default Breadcrumb;

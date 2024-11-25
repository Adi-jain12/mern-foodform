const ReviewItem = ({ dish }) => {
	return (
		<li className="space-y-1 py-3">
			<div className="flex items-center justify-between gap-4 text-md">
				<p>
					<span className="font-bold">{dish.quantity}&times;</span> {dish.name}
				</p>
			</div>
		</li>
	);
};

export default ReviewItem;

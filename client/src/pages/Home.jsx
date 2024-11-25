import { useSelector } from 'react-redux';
import CreateUser from '../components/user/CreateUser';
import Button from '../ui/Button';

function Home() {
	const username = useSelector((state) => state.user.username);

	return (
		<div className="my-10 px-4 text-center sm:my-16">
			<h1 className="mb-8  text-xl font-semibold md:text-3xl">
				Food Form
				<br />
				<span className="text-yellow-500">
					Pre-order the meals from your favourite restaurant.
				</span>
			</h1>

			{username === '' ? (
				<CreateUser />
			) : (
				<Button to="/step1" type="primary">
					Continue ordering, {username}
				</Button>
			)}
		</div>
	);
}

export default Home;

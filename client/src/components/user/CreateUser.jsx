import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateName } from './userSlice';
import Button from '../../ui/Button';

const CreateUser = () => {
	const [username, setUsername] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();

		if (!username) return;
		dispatch(updateName(username));
		navigate('/step1');
	}

	return (
		<form onSubmit={handleSubmit}>
			<p className="mb-4 text-sm text-stone-600 md:text-base">
				👋 Welcome! Please start by telling your name:
			</p>

			<input
				type="text"
				placeholder="Your full name"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				className="input mb-8 w-72"
			/>

			{username !== '' && (
				<div>
					<Button type="primary">Start ordering</Button>
				</div>
			)}
		</form>
	);
};

export default CreateUser;
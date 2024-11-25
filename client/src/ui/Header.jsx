import { Link } from 'react-router-dom';
import Username from '../components/user/UserName';

const Header = () => {
	return (
		<header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-16 py-4 uppercase">
			<Link to="/" className="tracking-widest">
				Food Form
			</Link>
			<Username />
		</header>
	);
};

export default Header;

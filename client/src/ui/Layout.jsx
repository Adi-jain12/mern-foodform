import Breadcrumb from '../components/menu/Breadcrumb';
import Header from './Header';

const Layout = ({ children }) => {
	return (
		<div className="grid h-screen grid-rows-[auto_1fr_auto]">
			<Header />

			<div className="overflow-scroll">
				<main className="mx-auto max-w-3xl ">
					<div className="flex justify-center items-center py-8">
						<Breadcrumb />
					</div>
					{children}
				</main>
			</div>
		</div>
	);
};

export default Layout;

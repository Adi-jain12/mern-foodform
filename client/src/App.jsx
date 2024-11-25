import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';

import Layout from './ui/Layout';

import Home from './pages/Home';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';
import Review from './pages/Review';
import Success from './pages/Success';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />

				<Route
					path="/step1"
					element={
						<Layout>
							<Step1 />
						</Layout>
					}
				/>

				<Route
					path="/step2"
					element={
						<Layout>
							<Step2 />
						</Layout>
					}
				/>
				<Route
					path="/step3"
					element={
						<Layout>
							<Step3 />
						</Layout>
					}
				/>
				<Route
					path="/review"
					element={
						<Layout>
							<Review />
						</Layout>
					}
				/>
				<Route path="/success" element={<Success />} />

				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</Router>
	);
};

export default App;

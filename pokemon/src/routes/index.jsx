import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Landing from '../views/Landing';
import Login from '../views/Login';
import Error404 from '../views/CodeError/Error404';

export default function Router() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route exact path='/' element={<Landing />} />
					<Route exact path='/login' element={<Login />} />
					<Route path='*' element={<Error404 />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

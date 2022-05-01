import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Landing from '../views/Landing';
import Login from '../views/Login';
import Pokedex from '../views/Pokedex';
import Pokebola from '../views/Pokedex/Pokebola';
import Error404 from '../views/CodeError/Error404';

export default function Router() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route exact path='/' element={<Landing />} />
					<Route exact path='/login' element={<Login />} />
					<Route exact path='/pokedex' element={<Pokedex />} />
					<Route exact path='/pokebola' element={<Pokebola />} />
					<Route path='*' element={<Error404 />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

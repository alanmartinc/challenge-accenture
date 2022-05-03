import ErorBundary from '../ErrorBoundary';
import Footer from '../Footer';
import Navbar from '../Navbar';

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
	return (
		<div className='layout'>
			<ErorBundary>
				<Navbar />
			</ErorBundary>

			{children}

			<Footer />
		</div>
	);
}

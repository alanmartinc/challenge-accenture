import ErorBundary from '../ErrorBoundary';
import Footer from '../Footer';
import Navbar from '../Navbar';
import './index.css';

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
	return (
		<div className='layout'>
			<ErorBundary>
				<div className='navbar'>
					<Navbar />
				</div>
			</ErorBundary>

			<div className='content'>{children}</div>
			<div className='background-footer'>
				<Footer />
			</div>
		</div>
	);
}

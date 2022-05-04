import ErorBundary from '../ErrorBoundary';
import Footer from '../Footer';
import Navbar from '../Navbar';
import './styles.css';

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
	return (
		<div className='layout'>
			<ErorBundary>
				<Navbar />
			</ErorBundary>

			<div className='content'>{children}</div>

			<Footer />
		</div>
	);
}

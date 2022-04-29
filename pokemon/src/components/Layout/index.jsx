import Footer from '../Footer';
import Navbar from '../Navbar';
import './index.css';

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
	return (
		<div className='layout'>
			<div className='navbar'>
				<Navbar />
			</div>
			<div className='content'>{children}</div>
			<div className='background-footer'>
				<Footer />
			</div>
		</div>
	);
}

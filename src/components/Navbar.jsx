import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';

const Navbar = () => {
	const location = useLocation();
	const history = useHistory();

	const [active, setActive] = useState('About');

	useEffect(() => {
		if (location.pathname === '/') {
			setActive('About');
		} else if (location.pathname === '/projects') {
			setActive('Projects');
		} else if (location.pathname === '/resume') {
			setActive('Resume');
		}
	}, [location]);

	return (
		<div className='navbar'>
			<div className='navbar_active'>{active}</div>

			<div className='navbar_items'>
				{active !== 'About' && (
					<Link to='/'>
						<div className='navbar_item' onClick={() => history.push('/about')}>
							About
						</div>
					</Link>
				)}
				{active !== 'Resume' ? (
					<Link to='/resume'>
						<div className='navbar_item' onClick={() => history.push('/about')}>
							Resume
						</div>
					</Link>
				) : null}

				{active !== 'Projects' && (
					<Link to='/projects'>
						<div className='navbar_item' onClick={() => history.push('/about')}>
							Projects
						</div>
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;

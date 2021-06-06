import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
	const location = useLocation();

	const [active, setActive] = useState('About');

	useEffect(() => {
		if (location.pathname === '/') {
			setActive('About');
		} else if (location.pathname === '/projects') {
			setActive('Projects');
		} else if (location.pathname === '/Resume') {
			setActive('Resume');
		}
	}, [active]);

	return (
		<div className='navbar'>
			<div className='navbar_active'>{active}</div>

			<div className='navbar_items'>
				{active !== 'About' && (
					<Link to='/'>
						<div className='navbar_item' onClick={() => setActive('About')}>
							About
						</div>
					</Link>
				)}
				{active !== 'Resume' ? (
					<Link to='/resume'>
						<div className='navbar_item' onClick={() => setActive('Resume')}>
							Resume
						</div>
					</Link>
				) : null}

				{active !== 'Projects' && (
					<Link to='/projects'>
						<div className='navbar_item' onClick={() => setActive('Projects')}>
							Projects
						</div>
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;

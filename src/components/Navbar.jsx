import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

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

	const navbarVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transform: {
				transition: {
					delay: 0.5,

					duration: 0.5,
				},
			},
		},
	};

	return (
		<motion.div
			variants={navbarVariants}
			initial='hidden'
			animate='visible'
			className='navbar'
		>
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
		</motion.div>
	);
};

export default Navbar;

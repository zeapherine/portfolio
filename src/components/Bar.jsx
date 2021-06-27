import React from 'react';
import { motion } from 'framer-motion';

const Bar = ({ value: { icon, name, level } }) => {
	const barWidth = `${level}%`;

	const variants = {
		initial: {
			width: 0,
		},
		animate: {
			width: barWidth,
			transition: {
				duration: 0.5,
				type: 'spring',
				damping: 10,
				stiffness: 100,
			},
		},
	};
	return (
		<div className='bar'>
			<motion.div
				className='bar-wrapper'
				style={{
					width: barWidth,
				}}
				variants={variants}
				initial='initial'
				animate='animate'
			>
				<span className='bar-name'>
					<img src={icon} alt='icon' className='bar-icon' />
					{name}
				</span>
			</motion.div>
		</div>
	);
};

export default Bar;

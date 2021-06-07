import React from 'react';

const Bar = ({ value: { icon, name, level } }) => {
	const barWidth = `${level}%`;
	return (
		<div className='bar'>
			<div className='bar-wrapper' style={{
                'width': barWidth
            }}>
				<span className='bar-name'>
					<img src={icon} alt='icon' className='bar-icon' />
					{name}
				</span>
			</div>
		</div>
	);
};

export default Bar;

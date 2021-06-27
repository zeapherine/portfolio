import React from 'react';

const Skillcard = ({ icon, title, about }) => {
	return (
		<div className='skill-card'>
			<img src={icon} alt='icon' className='skill-card_icon' />
			<div className='skill_card_body'>
				<div className='skill_card_title'>{title}</div>
				<div className='skill_card_content'>{about}</div>
			</div>
		</div>
	);
};

export default Skillcard;

import React from 'react';
import twitter from '../assets/icons/twitter.png';
import github from '../assets/icons/github.svg';
import pin from '../assets/icons/pin.svg';
import tie from '../assets/icons/tie.svg';
import linkedin from '../assets/icons/linkedin.png';
import resume from '../assets/resume.pdf';
import avatar from '../assets/avatar.jpeg';

import { motion } from 'framer-motion';

const SideBar = () => {
	const slidebarVariant = {
		initial: {
			x: '-20vw',
		},
		visible: {
			x: 0,

			transition: {
				delay: 0.1,
				duration: 0.5,
				type: 'spring',
			},
		},
	};
	return (
		<motion.div
			variants={slidebarVariant}
			initial='initial'
			animate='visible'
			className='sidebar'
		>
			<img src={avatar} alt='avatar' className='sidebar_avatar' />
			<div className='sidebar_name'>
				Zeapherine <span>Islary</span>
			</div>
			<div className='sidebar_item sidebar_title'>Web Developer</div>
			<a href={resume} download='resume.pdf'>
				<div className='sidebar_item sidebar_resume'>
					<img src={tie} alt='resume' className='sidebar_icon' /> Download
					Resume
				</div>
			</a>
			<figure className='sidebar_social-icons my-4'>
				<a href='https://twitter.com/zeapherine' target='blank'>
					<img
						src={twitter}
						alt='twitter'
						className='sidebar_icon instagram_icon mr-3'
					/>
				</a>
				<a
					href='https://www.linkedin.com/in/zeapherine-islary-a8055a174/'
					target='blank'
				>
					<img
						src={linkedin}
						alt='linkedIn'
						className='sidebar_icon instagram_icon mr-3'
					/>
				</a>
			</figure>

			<div className='sidebar_contact py-3'>
				<div className='sidebar_location py-2'>
					<img src={pin} alt='location' className='sidebar_icon' />
					Assam, India
				</div>

				<div className='sidebar_item '>zeapherine@gmail.com</div>
				<div className='sidebar_item '>+91 9365046884</div>
				<div className='sidebar_item sidebar_github  py-2'>
					<a href='https://github.com/zeapherine' target='blank'>
						<img src={github} alt='github' className='sidebar_icon mr-1' />
						github
					</a>
				</div>
			</div>
			<div className='sidebar_item sidebar_email'>
				<a href='mailto:zeapherine@gmail.com' target='blank'>
					Email Me
				</a>
			</div>
		</motion.div>
	);
};

export default SideBar;

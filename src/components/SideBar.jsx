import React from 'react';
import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons/instagram.svg';
import github from '../assets/icons/github.svg';
import pin from '../assets/icons/pin.svg';
import tie from '../assets/icons/tie.svg';
import linkedin from '../assets/icons/linkedin.svg';
import resume from '../assets/resume.pdf';

const SideBar = () => {
	return (
		<div className='sidebar'>
			<img
				src='https://media-exp1.licdn.com/dms/image/C5103AQFa9B8NIwRYzA/profile-displayphoto-shrink_800_800/0/1541026243775?e=1628726400&v=beta&t=k_XG0S9EkF-pH6c5Q9JqXwLZ8kCIa_KqwaGtGMbNVJ0'
				alt='avatar'
				className='sidebar_avatar'
			/>
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
				<a href=''>
					<img
						src={facebook}
						alt='facebook'
						className='sidebar_icon facebook_icon mr-3'
					/>
				</a>
				<a href=''>
					<img
						src={instagram}
						alt='instagram'
						className='sidebar_icon instagram_icon mr-3'
					/>
				</a>
				<a href=''>
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
					<a href=''>
						<img src={github} alt='github' className='sidebar_icon mr-1' />
						github
					</a>
				</div>
			</div>
			<div className='sidebar_item sidebar_email'>
				<a href='mailto:zeapherine@gmail.com'>Email Me</a>
			</div>
		</div>
	);
};

export default SideBar;

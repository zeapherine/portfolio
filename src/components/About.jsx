import React from 'react';

import api from '../assets/icons/api.svg';
import computer from '../assets/icons/computer.svg';
import repair from '../assets/icons/repair.svg';

import Skillcard from './Skillcard';

// const aboutVariants = {
// 	hidden: {
// 		opacity: 0,
// 		x: '100vw',
// 	},
// 	visible: {
// 		opacity: 1,
// 		x: 0,
// 		transition: {
// 			type: 'tween',
// 			delay: 0.5,
// 		},
// 	},
// };

const skills = [
	{
		id: 1,
		icon: computer,
		title: 'Frontend Development',
		about:
			'I can build a beautiful and scalable SPA using HTML, CSS, React.js and Redux',
	},
	{
		id: 2,
		icon: repair,
		title: 'Backend  Development',
		about:
			'handle database, server api using and MongoDB, firebase and other non-relational Databases.',
	},
	{
		id: 3,
		icon: api,
		title: 'API Development',
		about: 'I can develop robust REST API using express-rest-api ',
	},
];

const About = () => {
	return (
		<div className='about'>
			<div className='about_intro'>
				Hi! I am a person who loves to code and persistent at solving problems
				with code. I am a quick learner and always trying out new technologies.
				Aside from my love for technologies I also love nature and like to
				travel and immerse my self in different cultures.
			</div>

			<div className='container about_container'>
				<div className='line_break'></div>
				<h6 className='about_heading'>What I offer</h6>
				<div className='row card_collection_container'>
					{skills.map((skill) => (
						<Skillcard
							icon={skill.icon}
							title={skill.title}
							about={skill.about}
							key={skill.id}
						/>
					))}
				</div>
				<div className='line_break'></div>
			</div>
		</div>
	);
};

export default About;

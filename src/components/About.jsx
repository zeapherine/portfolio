import React from 'react';

import api from '../assets/icons/api.svg';
import computer from '../assets/icons/computer.svg';
import repair from '../assets/icons/repair.svg';

import { motion } from 'framer-motion';
import { fadeInUp, stagger, routeAnimation } from '../animation';

import Skillcard from './Skillcard';

const skills = [
	{
		id: 1,
		icon: computer,
		title: 'Frontend Development',
		about:
			'I can build a beautiful and scalable SPA using HTML, CSS, React.js, Javascript, Redux and Framer-Motion',
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
		about:
			'I can develop robust REST API using JavaScript and NodeJS. I use frameworks like express ',
	},
];

const aboutAnimation = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.7,
		},
	},
};

const About = () => {
	return (
		<motion.div
			variants={routeAnimation}
			initial='initial'
			animate='animate'
			exit='exit'
			className='about'
		>
			<div className='about_intro'>
				<motion.div variants={aboutAnimation}>
					Hi! I am a person who loves to code and persistent at solving problems
					with code. I am a quick learner and always trying out new
					technologies. Aside from my love for technologies I also love nature
					and like to travel and immerse my self in different cultures.
				</motion.div>
			</div>

			<div className='container about_container'>
				<div className='line_break'></div>
				<h6 className='about_heading'>What I offer</h6>
				<motion.div
					variants={stagger}
					initial='initial'
					animate='animate'
					className='row card_collection_container'
				>
					{skills.map((skill) => (
						<motion.div variants={fadeInUp} className='col-lg-6' key={skill.id}>
							<Skillcard
								icon={skill.icon}
								title={skill.title}
								about={skill.about}
							/>
						</motion.div>
					))}
				</motion.div>
			</div>
		</motion.div>
	);
};

export default About;

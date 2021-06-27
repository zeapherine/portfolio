import React from 'react';
import { motion } from 'framer-motion';

import Bar from './Bar';
import git from '../assets/icons/github.svg';
import pin from '../assets/icons/pin.svg';
import react from '../assets/icons/react.png';
import node from '../assets/icons/nodejs.png';
import mongo from '../assets/icons/mongo.png';
import material from '../assets/icons/material.png';
import bootstrap from '../assets/icons/bootstrap.png';
import html from '../assets/icons/html.png';
import css from '../assets/icons/css.png';
import javascript from '../assets/icons/javascript.png';
import figma from '../assets/icons/figma.png';
import framer from '../assets/icons/framer.png';

import { routeAnimation } from '../animation';

const languages = [
	{
		icon: react,
		name: 'React',
		level: '80',
	},
	{
		icon: node,
		name: 'NodeJS',
		level: '50',
	},
	{
		icon: mongo,
		name: 'MongoDB',
		level: '80',
	},
	{
		icon: material,
		name: 'Material UI',
		level: '85',
	},
	{
		icon: bootstrap,
		name: 'Bootstrap',
		level: '85',
	},
	{
		icon: html,
		name: 'HTML',
		level: '89',
	},
	{
		icon: css,
		name: 'CSS',
		level: '75',
	},
	{
		icon: javascript,
		name: 'Javascript',
		level: '65',
	},
];

const tools = [
	{
		icon: figma,
		name: 'Figma',
		level: '40',
	},
	{
		icon: git,
		name: 'Git',
		level: '75',
	},
	{
		icon: framer,
		name: 'Framer Motion',
		level: '60',
	},
];

const resumeAnimation = {
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

const Resume = () => {
	return (
		<motion.div
			variants={routeAnimation}
			initial='initial'
			animate='animate'
			exit='exit'
			className='container resume'
		>
			<div className='row'>
				<motion.div className='resume-div col-lg-6' variants={resumeAnimation}>
					<h2>Education</h2>
					<div className='qualification-details'>
						<h4>B.Sc Computer Science</h4>
						<h6>St. Edmund's College</h6>
						<p>
							Shillong, Meghalaya, India{' '}
							<img src={pin} alt='location' className='shillong' />
						</p>
					</div>
				</motion.div>
				<motion.div className='resume-div col-lg-6' variants={resumeAnimation}>
					<h2>Experience</h2>
					<div className='qualification-details'>
						<h4>Freelancer</h4>
						<p>
							I have developed static websites for start-ups. I have also build
							various projects using different web technologies.
						</p>
					</div>
				</motion.div>
			</div>

			<div className='row skills-div'>
				<div className='col-lg-6 resume-languages resume-div'>
					<h5 className='resume-language-heading'>Languages and Frameworks</h5>
					<div className='resume-language-body mt-3'>
						{languages.map((language) => (
							<Bar value={language} />
						))}
					</div>
				</div>

				<div className='col-lg-6 resume-languages resume-div'>
					<h5 className='resume-language-heading'>Tools and Softwares</h5>
					<div className='resume-language-body mt-3'>
						{tools.map((tool) => (
							<Bar value={tool} />
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Resume;

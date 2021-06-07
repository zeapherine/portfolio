import React from 'react';

import Bar from './Bar';
import react from '../assets/icons/github.svg';
import pin from '../assets/icons/pin.svg';

const languages = [
	{
		icon: react,
		name: 'React',
		level: '45',
	},
	{
		icon: react,
		name: 'Javascript',
		level: '60',
	},
	{
		icon: react,
		name: 'NodeJS',
		level: '80',
	},
	{
		icon: react,
		name: 'React',
		level: '100',
	},
	{
		icon: react,
		name: 'Javascript',
		level: '50',
	},
];

const tools = [
	{
		icon: react,
		name: 'Figma',
		level: '85',
	},
	{
		icon: react,
		name: 'VS code',
		level: '45',
	},
	{
		icon: react,
		name: 'Framer Motion',
		level: '60',
	},
];

const Resume = () => {
	return (
		<div className='container resume'>
			<div className='row'>
				<div className='resume-div col-lg-6'>
					<h2>Education</h2>
					<div className='qualification-details'>
						<h4>B.Sc Computer Science</h4>
						<h6>St. Edmund's College</h6>
						<p>
							Shillong, Meghalaya, India{' '}
							<img src={pin} alt='location' className='shillong' />
						</p>
					</div>
				</div>
				<div className='resume-div col-lg-6'>
					<h2>Experience</h2>
					<div className='qualification-details'>
						<h4>Freelancer</h4>
						<p>
							I have developed static websites for start-ups. I have also build
							various projects using different web technologies.
						</p>
					</div>
				</div>
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
		</div>
	);
};

export default Resume;

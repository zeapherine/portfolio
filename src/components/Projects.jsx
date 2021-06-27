import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

import data_projects from './project_data/data';

const Projects = () => {
	const [projects, setProjects] = useState(data_projects);

	const handleFilterProjects = (name) => {
		const newArray = data_projects.filter((project) =>
			project.category.includes(name)
		);
		setProjects(newArray);
	};

	const projectsVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				delay: 0.2,
				duration: 0.6,
				when: 'beforeChildren',
				staggerChildren: 1,
			},
		},
	};

	const projectVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
		},
	};

	return (
		<motion.div
			variants={projectsVariants}
			initial='hidden'
			animate='visible'
			className='container projects'
		>
			<div className='projects-navbar'>
				<div onClick={() => setProjects(data_projects)}>All</div>
				<div onClick={() => handleFilterProjects('react.js')}>React JS</div>
				<div onClick={() => handleFilterProjects('node.js')}>NodeJS</div>
				<div onClick={() => handleFilterProjects('vanilla')}>Vanila JS</div>
				<div onClick={() => handleFilterProjects('mongoDB')}>MongoDB</div>
			</div>

			<motion.div variants={projectVariants} className='row'>
				{projects.map((project) => (
					<ProjectCard key={project.name} project={project} />
				))}
			</motion.div>
		</motion.div>
	);
};

export default Projects;

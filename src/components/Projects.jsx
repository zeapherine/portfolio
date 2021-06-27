import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

import data_projects from './project_data/data';
import { fadeInUp, stagger, routeAnimation } from '../animation';

const Projects = () => {
	const [projects, setProjects] = useState(data_projects);

	const handleFilterProjects = (name) => {
		const newArray = data_projects.filter((project) =>
			project.category.includes(name)
		);
		setProjects(newArray);
	};

	return (
		<motion.div
			variants={routeAnimation}
			initial='initial'
			animate='animate'
			exit='exit'
			className='container projects'
		>
			<div className='projects-navbar'>
				<div onClick={() => setProjects(data_projects)}>All</div>
				<div onClick={() => handleFilterProjects('react.js')}>React JS</div>
				<div onClick={() => handleFilterProjects('node.js')}>NodeJS</div>
				<div onClick={() => handleFilterProjects('vanilla')}>Vanila JS</div>
				<div onClick={() => handleFilterProjects('mongoDB')}>MongoDB</div>
			</div>

			<motion.div
				variants={stagger}
				initial='initial'
				animate='animate'
				className='row'
			>
				{projects.map((project) => (
					<motion.div
						variants={fadeInUp}
						className='project-card col-md-6 col-lg-4 my-3'
						key={project.name}
					>
						<ProjectCard project={project} />
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default Projects;

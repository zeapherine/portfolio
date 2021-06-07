import React, { useState } from 'react';

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

	return (
		<div>
			<div className='container projects'>
				<div className='projects-navbar'>
					<div onClick={() => setProjects(data_projects)}>All</div>
					<div onClick={() => handleFilterProjects('react.js')}>React JS</div>
					<div onClick={() => handleFilterProjects('node.js')}>NodeJS</div>
					<div onClick={() => handleFilterProjects('vanilla')}>Vanila JS</div>
					<div onClick={() => handleFilterProjects('mongoDB')}>MongoDB</div>
				</div>

				<div className='row'>
					{projects.map((project) => (
						<ProjectCard key={project.name} project={project} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;

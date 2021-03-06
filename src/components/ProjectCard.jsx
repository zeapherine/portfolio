import React, { useState } from 'react';

import github from '../assets/icons/github.svg';
import Modal from './Modal';

const ProjectCard = ({
	project: { name, image, deployed_url, github_url, discription, category },
}) => {
	const [modalShown, toggleModal] = useState(false);
	return (
		<figure className='project-card-wrapper pb-5'>
			<img
				src={image}
				alt={name}
				className='project-card-image p-2'
				onClick={() => {
					toggleModal(!modalShown);
				}}
			/>

			{modalShown && (
				<Modal
					shown={modalShown}
					close={() => {
						toggleModal(false);
					}}
					content={{ name, image, deployed_url, discription, category }}
				></Modal>
			)}

			<div className='project-card-title p-2 '>
				<a href={github_url} target='blank'>
					<img
						src={github}
						alt='github icon'
						className='project-card-icon m-3 '
					/>
				</a>
				{name}
			</div>
		</figure>
	);
};

export default ProjectCard;

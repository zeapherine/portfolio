import React from 'react';
import { motion } from 'framer-motion';
import { stagger, fadeInUp } from '../animation';

const Modal = ({
	content: { name, image, deployed_url, discription, category },
	shown,
	close,
}) => {
	const variants = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
		},
	};

	return shown ? (
		<div
			className='modal-backdrop'
			onClick={() => {
				// close modal when outside of modal is clicked
				close();
			}}
		>
			<motion.div
				variants={variants}
				initial='initial'
				animate='animate'
				className='modal-content'
				onClick={(e) => {
					// do not close modal if anything inside modal content is clicked
					e.stopPropagation();
				}}
			>
				<motion.div variants={stagger} className='modal-div'>
					<motion.a variants={fadeInUp} className='modal-close' onClick={close}>
						X
					</motion.a>
					<motion.img variants={fadeInUp} src={image} alt='name' />

					<motion.h3 variants={fadeInUp}>{name}</motion.h3>
					<motion.p variants={fadeInUp}>{discription}</motion.p>

					<motion.div variants={stagger} className='tech-tags-container'>
						{category.map((tag) => (
							<motion.p variants={fadeInUp} className='tech-tags' key={tag}>
								{tag}
							</motion.p>
						))}
					</motion.div>

					<motion.a
						variants={fadeInUp}
						className='live-site-link'
						href={deployed_url}
						target='blank'
					>
						Live App
					</motion.a>
				</motion.div>
			</motion.div>
		</div>
	) : null;
};

export default Modal;

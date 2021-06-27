import React from 'react';

const Modal = ({
	content: { name, image, deployed_url, discription, category },
	shown,
	close,
}) => {
	return shown ? (
		<div
			className='modal-backdrop'
			onClick={() => {
				// close modal when outside of modal is clicked
				close();
			}}
		>
			<div
				className='modal-content'
				onClick={(e) => {
					// do not close modal if anything inside modal content is clicked
					e.stopPropagation();
				}}
			>
				<div className='modal-div'>
					<img src={image} alt='name' />

					<h3>{name}</h3>
					<p>{discription}</p>

					<div className='tech-tags-container'>
						{category.map((tag) => (
							<p className='tech-tags' key={tag}>
								{tag}
							</p>
						))}
					</div>

					<a className='live-site-link' href={deployed_url} target='blank'>
						Live App
					</a>

					<a className='modal-close' onClick={close}>
						X
					</a>
				</div>
			</div>
		</div>
	) : null;
};

export default Modal;

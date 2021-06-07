import React from 'react';

const Modal = ({ children, shown, close }) => {
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
				<h5>todo:Project Description section</h5>
				<p>Todo: Link to live project</p>
				<div className='modal-close' onClick={close}>
					Close
				</div>
			</div>
		</div>
	) : null;
};

export default Modal;

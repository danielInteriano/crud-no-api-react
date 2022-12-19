import './Modal.css';

const Modal = ({ children, isOpen, closeModal }) => {
	return (
		<article className={`modal ${isOpen && 'is-modal'}`} onClick={closeModal}>
			<div className="modal-container">
				<button className="modal-close" variant="dark" onClick={closeModal}>
					Cerrar
				</button>
				{children}
			</div>
		</article>
	);
};

export default Modal;

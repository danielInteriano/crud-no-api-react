import { Button } from 'react-bootstrap';
import './Modal.css';

const Modal = ({ children, isOpen, closeModal }) => {
	const handleModalContainerClick = (e) => e.stopPropagation();

	return (
		<article className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
			<div className="modal-container" onClick={handleModalContainerClick}>
				<Button className="modal-close" variant="danger" onClick={closeModal}>
					X
				</Button>
				{children}
			</div>
		</article>
	);
};

export default Modal;

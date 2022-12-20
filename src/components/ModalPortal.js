import { Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import './Modal.css';

const ModalPortal = ({ children, isOpen, closeModal }) => {
	const handleModalContainerClick = (e) => e.stopPropagation();

	return ReactDOM.createPortal(
		<article className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
			<div className="modal-container" onClick={handleModalContainerClick}>
				<Button className="modal-close" variant="danger" onClick={closeModal}>
					X
				</Button>
				{children}
			</div>
		</article>,
		document.getElementById('portal')
	);
};

export default ModalPortal;

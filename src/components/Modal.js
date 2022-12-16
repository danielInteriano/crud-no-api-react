import { Button } from 'react-bootstrap';
import './Modal.css';

const Modal = ({ children }) => {
	return (
		<article className="modal is-modal">
			<div className="modal-container">
				<Button variant="outline-dark">X</Button>
				{children}
			</div>
		</article>
	);
};

export default Modal;

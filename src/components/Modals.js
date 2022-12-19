import { Container } from 'react-bootstrap';
import { useModal } from '../hooks/useModal';
import Modal from './Modal';

const Modals = () => {
	const [isOpenModal1, openModal1, closeModal1] = useModal(false);

	return (
		<Container>
			<h2>Modales</h2>
			<button variant="primary" onClick={openModal1}>
				Modal 1
			</button>
			<Modal isOpen={isOpenModal1} closeModal={closeModal1}>
				<h3>Modal 1</h3>
				<p>
					Este es el contenido de un modal que se pasará dentro la propiedad children en otro
					componente.
				</p>
				<img src="https://placeimg.com/400/400/animals" alt="animals" />
			</Modal>
		</Container>
	);
};

export default Modals;

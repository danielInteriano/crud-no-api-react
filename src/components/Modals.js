import { Button, Container } from 'react-bootstrap';
import { useModal } from '../hooks/useModal';
import ContactForm from './ContactForm';
import Modal from './Modal';
import ModalPortal from './ModalPortal';

const Modals = () => {
	const [isOpenModal1, openModal1, closeModal1] = useModal(false);
	const [isOpenModalContact, openModalContact, closeModalContact] = useModal(false);
	const [isOpenModalPortal, openModalPortal, closeModalPortal] = useModal(false);

	return (
		<Container>
			<h2>Modales</h2>
			<Button variant="primary" onClick={openModal1}>
				Modal 1
			</Button>
			<Modal isOpen={isOpenModal1} closeModal={closeModal1}>
				<h3>Modal 1</h3>
				<p>
					Este es el contenido de un modal que se pasará dentro la propiedad children en otro
					componente.
				</p>
				<img src="https://placeimg.com/400/400/animals" alt="animals" />
			</Modal>

			<Button variant="primary" onClick={openModalContact}>
				Modal Contactos
			</Button>
			<Modal isOpen={isOpenModalContact} closeModal={closeModalContact}>
				<ContactForm />
			</Modal>

			<Button variant="primary" onClick={openModalPortal}>
				Modal en Portal
			</Button>
			<ModalPortal isOpen={isOpenModalPortal} closeModal={closeModalPortal}>
				<ContactForm />
			</ModalPortal>
		</Container>
	);
};

export default Modals;

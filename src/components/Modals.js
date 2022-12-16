import { Button, Container } from 'react-bootstrap';
import Modal from './Modal';

const Modals = () => {
	return (
		<Container>
			<h2>Modales</h2>
			<Button variant="outline-primary">Modal 1</Button>
			<Modal>
				<h2>Modal 1</h2>
				<p>
					Este es un parrafo dentro de un componente modal que será pasado dentro de las
					prop.children a otro componente.
				</p>
				<img src="https://placeimg.com/400/400/animals" alt="animals" />
			</Modal>
		</Container>
	);
};

export default Modals;

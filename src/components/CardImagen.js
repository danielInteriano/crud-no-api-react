import React from 'react';
import { Card } from 'react-bootstrap';

const CardImagen = ({ titulo, imagen }) => {
	return (
		<Card>
			<Card.Img variant="top" src={imagen} />
			<Card.Body>
				<Card.Title>{titulo}</Card.Title>
			</Card.Body>
		</Card>
	);
};

export default CardImagen;

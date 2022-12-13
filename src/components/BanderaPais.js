import React from 'react';
import { Card, Stack } from 'react-bootstrap';

const BanderaPais = ({ bandera, escudo }) => {
	//console.log('BanderaPais: ', bandera, escudo);

	return (
		<Stack className="d-flex justify-content-around" direction="horizontal" gap={3}>
			<Card>
				<Card.Img variant="top" src={bandera.svg} />
				<Card.Body>
					<Card.Title>Bandera Nacional</Card.Title>
				</Card.Body>
			</Card>

			<Card>
				<Card.Img variant="top" src={escudo.svg} />
				<Card.Body>
					<Card.Title>Escudo Nacional</Card.Title>
				</Card.Body>
			</Card>
		</Stack>
	);
};

export default BanderaPais;

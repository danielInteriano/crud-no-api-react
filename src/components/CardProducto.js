import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { useFetch } from '../hooks/useFetch';
import Loader from './Loader';
import Message from './Message';

const CardProducto = ({ producto, imagen }) => {
	let url = `https://api.escuelajs.co/api/v1/products/${producto}`;

	const { data, error, loading } = useFetch(url);

	if (!data) return null;
	if (error) {
		return <Message msg={`Error ${error.status}:${error.sttatusText}`} bgColor="#dc3545" />;
	}

	let imagenes = data.images;

	const cambiarImagen = (imagen) => {
		return imagenes[imagen];
	};

	return (
		<Row>
			{loading && <Loader />}
			<Card border="warning" style={{ width: '18rem' }}>
				<Card.Img variant="top" src={cambiarImagen(imagen)} />
				<Card.Body>
					<Card.Title>{data.title}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">{data.category.name}</Card.Subtitle>
					<Card.Text>{data.description}</Card.Text>
				</Card.Body>
				<Card.Body>
					<Card.Title className="text-end">L. {data.price}</Card.Title>
				</Card.Body>
			</Card>
		</Row>
	);
};

export default CardProducto;

import React from 'react';
import { Stack } from 'react-bootstrap';
import CardImagen from './CardImagen';

const BanderaPais = ({ bandera, escudo }) => {
	let noImagen =
		'https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg';
	return (
		<Stack className="d-flex justify-content-around" direction="horizontal" gap={3}>
			<CardImagen titulo={'Bandera Nacional'} imagen={bandera.svg} />

			{escudo.svg ? (
				<CardImagen titulo={'Escudo Nacional'} imagen={escudo.svg} />
			) : (
				<CardImagen titulo={'Imagen no disponible'} imagen={noImagen} />
			)}
		</Stack>
	);
};

export default BanderaPais;

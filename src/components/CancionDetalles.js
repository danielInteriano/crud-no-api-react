import React from 'react';
import CancionArtistica from './CancionArtistica';
import CancionLetra from './CancionLetra';

const CancionDetalles = ({ search, cancion, biography }) => {
	return (
		<div>
			<h2>Detalles de la Canción</h2>
			<CancionArtistica />
			<CancionLetra />
		</div>
	);
};

export default CancionDetalles;

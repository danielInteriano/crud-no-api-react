import React, { useState } from 'react';
import CancionDetalles from './CancionDetalles';
import CancionForm from './CancionForm';
import Loader from './Loader';

const CrudBuscadorCanciones = () => {
	const [search, setSearch] = useState(null);
	const [cancion, setCancion] = useState(null);
	const [biography, setBiography] = useState(null);
	const [loading, setLoading] = useState(false);

	//TODO:Variable para manejar el estado de la busqueda
	const handleSearch = (data) => {
		console.log(data);
	};

	return (
		<div>
			<h2>Buscar</h2>
			{loading && <Loader />}
			<CancionForm handleSearch={handleSearch} />
			<CancionDetalles search={search} cancion={cancion} biograpy={biography} />
		</div>
	);
};

export default CrudBuscadorCanciones;

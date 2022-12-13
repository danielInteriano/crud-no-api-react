import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { helpHttp } from '../helpers/helpHttp';
import Loader from './Loader';
import PaisDetalles from './PaisDetalles';
import PaisForm from './PaisForm';

const CrudBuscadorPaises = () => {
	const [search, setSearch] = useState(null);
	const [pais, setPais] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (search === null) return;

		const fetchData = async () => {
			const namePais = search.pais;

			let api = helpHttp();
			let paisUrl = `https://restcountries.com/v3.1/name/${namePais}`;

			setLoading(true);

			api.get(paisUrl).then((res) => {
				if (!res.err) {
					setPais(res[0]);
					console.log('Detalle:', res[0]);
				} else {
					setPais(null);
				}
				setLoading(false);
			});

			setLoading(false);
		};

		fetchData();
	}, [search]);

	//TODO:Variable para manejar el estado de la busqueda
	const handleSearch = (data) => {
		setSearch(data);
	};

	return (
		<Container>
			<h2>Buscar</h2>
			{loading && <Loader />}
			<Row>
				<PaisForm handleSearch={handleSearch} />
			</Row>
			<Row>
				<Container>{search && !loading && <PaisDetalles search={search} pais={pais} />}</Container>
			</Row>
		</Container>
	);
};

export default CrudBuscadorPaises;

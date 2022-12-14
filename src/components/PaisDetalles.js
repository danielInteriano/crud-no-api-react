import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BanderaPais from './BanderaPais';
import DatosPais from './DatosPais';

const PaisDetalles = ({ pais }) => {
	if (!pais) return <h5>No hay datos que mostrar</h5>;
	
	return (
		<Row>
			<h4>Detalles del País</h4>
			<Col md={8} gap={2}>
				{pais && <BanderaPais bandera={pais.flags} escudo={pais.coatOfArms} />}
			</Col>
			<Col md={4}>
				{pais && (
					<DatosPais
						name={pais.name}
						capital={pais.capital}
						area={pais.area}
						poblacion={pais.population}
						continente={pais.continents}
					/>
				)}
			</Col>
		</Row>
	);
};

export default PaisDetalles;

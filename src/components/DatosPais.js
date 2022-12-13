import React from 'react';
import { Col } from 'react-bootstrap';

const DatosPais = ({ name, capital, area, poblacion, continente }) => {
	//console.log('DatosPais: ', pais);
	return (
		<Col>
			<h4> Principales Datos Geográficos</h4>
			<hr />
			<br />
			<h5>
				Continente de ubicación: <b>{continente}</b>
			</h5>
			<br />
			<h5>
				Nombre del país: <b>{name.official}</b>
			</h5>
			<br />
			<h5>
				Capital: <b>{capital}</b>
			</h5>
			<br />
			<h5>
				Extención territorial:{' '}
				<b>{area.toLocaleString(undefined, { maximumFractionDigits: 2 })} m²</b>
			</h5>
			<br />
			<h5>
				Cantidad de habitantes:{' '}
				<b>{poblacion.toLocaleString(undefined, { maximumFractionDigits: 2 })} millones</b>
			</h5>
		</Col>
	);
};

export default DatosPais;

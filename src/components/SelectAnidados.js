import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import SelectPlantilla from './SelectPlantilla';

const SelectAnidados = () => {
	const [estados, setEstado] = useState('');
	const [municipios, setMunicipio] = useState('');
	const [colonias, setColonia] = useState('');

	let url = '';

	return (
		<Container>
			<h2>Select Anidados</h2>
			<SelectPlantilla
				titulo="Estados"
				url={url}
				handleChange={(e) => {
					setEstado(e.target.value);
				}}
			/>
			<br />
			{estados && (
				<SelectPlantilla
					titulo="Municipios"
					url={url}
					handleChange={(e) => {
						setMunicipio(e.target.value);
					}}
				/>
			)}
			<br />
			{municipios && (
				<SelectPlantilla
					titulo="Colonias"
					url={url}
					handleChange={(e) => {
						setColonia(e.target.value);
					}}
				/>
			)}
			<br />
			<pre>
				<code>
					Ha seleccionado: {estados} - {municipios} - {colonias}
				</code>
			</pre>
		</Container>
	);
};

export default SelectAnidados;

import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { useFetch } from '../hooks/useFetch';
import Loader from './Loader';
import Message from './Message';

const SelectPlantilla = ({ titulo, url, handleChange }) => {
	const { data, error, loading } = useFetch(url);
	//console.log(data);

	if (!data) return null;
	if (error) {
		return <Message msg={`Error ${error.status}:${error.sttatusText}`} bgColor="#dc3545" />;
	}

	let tituloUI = titulo[0].toUpperCase() + titulo.substring(1);

	if (titulo === 'categoria') {
		return (
			<div>
				{loading && <Loader />}
				<FloatingLabel controlId="floatingSelect" label={tituloUI}>
					<Form.Select name={titulo} id={titulo} onChange={handleChange}>
						<option disabled>Seleccione una {titulo}</option>
						{data &&
							data.map((el) => (
								<option value={el.id} key={el.id}>
									{el.name}
								</option>
							))}
					</Form.Select>
				</FloatingLabel>
			</div>
		);
	}

	if (titulo === 'producto') {
		return (
			<div>
				{loading && <Loader />}
				<FloatingLabel controlId="floatingSelect" label={tituloUI}>
					<Form.Select name={titulo} id={titulo} onChange={handleChange}>
						<option disabled>Seleccione un {titulo}</option>
						{data &&
							data.map((el) => (
								<option value={el.id} key={el.id}>
									{el.title}
								</option>
							))}
					</Form.Select>
				</FloatingLabel>
			</div>
		);
	}

	if (titulo === 'imagen') {
		return (
			<div>
				{loading && <Loader />}
				<FloatingLabel controlId="floatingSelect" label={tituloUI}>
					<Form.Select name={titulo} id={titulo} onChange={handleChange}>
						<option disabled>Seleccione una {titulo}</option>
						{data &&
							data.images.map((el, index) => (
								<option value={index} key={index}>
									Imagen {index + 1}
								</option>
							))}
					</Form.Select>
				</FloatingLabel>
			</div>
		);
	}
};

export default SelectPlantilla;

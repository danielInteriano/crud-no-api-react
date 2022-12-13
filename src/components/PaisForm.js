import React, { useState } from 'react';

const initialForm = {
	pais: '',
};

const PaisForm = ({ handleSearch }) => {
	const [form, setForm] = useState(initialForm);

	//TODO: función para manejar el cambio de los input del formulario
	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value.toLowerCase() });
	};

	//TODO: función para menejar el evento submit del formulario
	const handleSubmit = (e) => {
		e.preventDefault();

		if (!form.pais) {
			alert('Datos Incompletos');
			return;
		}

		handleSearch(form);
		setForm(initialForm);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="pais"
					placeholder="Nombre del país"
					onChange={handleChange}
					value={form.pais}
				/>
				<input type="submit" value="Enviar" />
			</form>
		</div>
	);
};

export default PaisForm;

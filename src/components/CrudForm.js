import React, { useState } from 'react';

const initialForm = {
	name: '',
	constellation: '',
	id: null,
};

const CrudForm = () => {
	const [form, setForm] = useState(initialForm);

	const handleChange = (e) => {};
	const handleSubmit = (e) => {};
	const handleReset = (e) => {};

	return (
		<div>
			<h3>Agregar</h3>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="nombre"
					placeholder="Nombre"
					onChange={handleChange}
					value={form.name}
				></input>
				<input
					type="text"
					name="constellation"
					placeholder="Constelación"
					onChange={handleChange}
					value={form.constellation}
				></input>
				<input type="submit" value="Enviar"></input>
				<input type="reset" value="Limpiar" onClick={handleReset}></input>
			</form>
		</div>
	);
};

export default CrudForm;

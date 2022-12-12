import React, { useState } from 'react';

const initialForm = {
	artista: '',
	cancion: '',
};

const CancionForm = ({ handleSearch }) => {
	const [form, setForm] = useState(initialForm);

	//TODO: función para manejar el cambio de los input del formulario
	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	//TODO: función para menejar el evento submit del formulario
	const handleSubmit = (e) => {
		e.preventDefault();

		if (!form.artista || !form.cancion) {
			alert('Datos Incompletos');
			return;
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="artista"
					placeholder="Nombre del Intérprete"
					onChange={handleChange}
					value={form.artista}
				/>
				<input
					type="text"
					name="cancion"
					placeholder="Nombre de la canción"
					onChange={handleChange}
					value={form.cancion}
				/>
				<input type="submit" value="Enviar" />
			</form>
		</div>
	);
};

export default CancionForm;

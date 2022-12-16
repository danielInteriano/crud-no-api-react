import { useState } from 'react';

export const useForm = (initialForm, validateForm) => {
	const [form, setForm] = useState(initialForm);
	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);
	const [response, setResponse] = useState(null);

	//Todo: Función para el control de cambios de los campos del formulario
	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	//Todo: Función para el manejo de errores en el momento en que el campo pierde el foco
	const handleBlur = (e) => {
		handleChange(e);
		setErrors(validateForm(form));
	};

	//Todo: Funcion para el envio de los datos por el evento submit
	const handleSubmit = () => {};

	return {
		form,
		errors,
		loading,
		response,
		handleChange,
		handleBlur,
		handleSubmit,
	};
};

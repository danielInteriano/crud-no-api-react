import React from 'react';
import { Button, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useForm } from '../hooks/useForm';
import Loader from './Loader';

const initialForm = {
	name: '',
	email: '',
	asunto: '',
	comentario: '',
};

const validationForm = (form) => {
	let errors = {};

	const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
	const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
	const regexComments = /^.{1,255}$/;

	if (!form.name.trim()) {
		errors.name = "El campo 'Nombre' es requerido.";
	} else if (!regexName.test(form.name.trim())) {
		errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco.";
	}

	if (!form.email.trim()) {
		errors.email = "El campo 'Email' es requerido.";
	} else if (!regexEmail.test(form.email.trim())) {
		errors.email = "El campo 'Email' no es válido.";
	}

	if (!form.asunto.trim()) {
		errors.asunto = "El campo 'Asunto' es requerido.";
	}

	if (!form.comentario.trim()) {
		errors.comentario = "El campo 'Comentario' es requerido.";
	} else if (!regexComments.test(form.comentario.trim())) {
		errors.comentario = "El campo 'Comentario' solo acepta 255 caracteres";
	}

	return errors;
};

const ContactForm = () => {
	const { form, errors, loading, response, handleChange, handleBlur, handleSubmit } = useForm(
		initialForm,
		validationForm
	);
	return (
		<Container>
			<h2>Validaciones en formularios</h2>
			<Row lg="2">
				<Form onSubmit={handleSubmit}>
					<Form.Group className="mb-3" controlId="name">
						<Form.Label>Nombre</Form.Label>
						<Form.Control
							type="text"
							name="name"
							placeholder="Escribe tu nombre"
							onBlur={handleBlur}
							onChange={handleChange}
							value={form.name}
							required
						/>
					</Form.Group>
					{errors.name && <p className="text-danger">{errors.name}</p>}
					<Form.Group className="mb-3" controlId="email">
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="email"
							name="email"
							placeholder="Escribe tu email"
							onBlur={handleBlur}
							onChange={handleChange}
							value={form.email}
							required
						/>
					</Form.Group>
					{errors.email && <p className="text-danger">{errors.email}</p>}
					<Form.Group className="mb-3" controlId="asunto">
						<Form.Label>Asunto</Form.Label>
						<Form.Control
							type="text"
							name="asunto"
							placeholder="Asunto"
							onBlur={handleBlur}
							onChange={handleChange}
							value={form.asunto}
							required
						/>
					</Form.Group>
					{errors.asunto && <p className="text-danger">{errors.asunto}</p>}
					<FloatingLabel
						controlId="floatingTextarea"
						label="Contenido del mensaje"
						className="mb-3"
					>
						<Form.Control
							name="comentario"
							type="textarea"
							placeholder="Escribe tu comentario"
							onBlur={handleBlur}
							onChange={handleChange}
							value={form.comentario}
							required
						/>
					</FloatingLabel>
					{errors.comentario && <p className="text-danger">{errors.comentario}</p>}
					<Button type="submit" variant="outline-success">
						Enviar
					</Button>
				</Form>
				{loading && <Loader />}
				{response && (
					<div className="alert alert-success" role="alert">
						¡Sus datos fueron enviados con éxito!
					</div>
				)}
			</Row>
		</Container>
	);
};

export default ContactForm;

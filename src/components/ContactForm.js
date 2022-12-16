import React from 'react';
import { Button, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useForm } from '../hooks/useForm';

const initialForm = {
	name: '',
	email: '',
	asunto: '',
	comentario: '',
};

const validationForm = (form) => {
	let errors = {};

	if (!form.name.trim()) {
		errors.name = "El campo 'Nombre' es requerido.";
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
				<Form onChange={handleChange}>
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
			</Row>
		</Container>
	);
};

export default ContactForm;

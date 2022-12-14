import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

const SelectPlantilla = ({ titulo, url, handleChange }) => {
	return (
		<div>
			<FloatingLabel controlId="floatingSelect" label={titulo}>
				<Form.Select aria-label="Seleccione un Estado">
					<option>---</option>
				</Form.Select>
			</FloatingLabel>
		</div>
	);
};

export default SelectPlantilla;

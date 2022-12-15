import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CardProducto from './CardProducto';
import SelectPlantilla from './SelectPlantilla';

const SelectAnidados = () => {
	const [categorias, setCategorias] = useState('');
	const [productos, setProductos] = useState('');
	const [imagenes, setImagenes] = useState('');

	return (
		<Container>
			<Row>
				<Col sm={9} md={8}>
					<h2>Select Anidados</h2>
					<SelectPlantilla
						titulo="categoria"
						url={'https://api.escuelajs.co/api/v1/categories'}
						handleChange={(e) => {
							setCategorias(e.target.value);
							console.log(e.target.value);
						}}
					/>
					<br />
					{categorias && (
						<SelectPlantilla
							titulo="producto"
							url={`https://api.escuelajs.co/api/v1/categories/${categorias}/products`}
							handleChange={(e) => {
								setProductos(e.target.value);
								console.log(e.target.value);
							}}
						/>
					)}
					<br />
					{productos && (
						<SelectPlantilla
							titulo="imagen"
							url={`https://api.escuelajs.co/api/v1/products/${productos}`}
							handleChange={(e) => {
								setImagenes(e.target.value);
								console.log(e.target.value);
							}}
						/>
					)}
				</Col>
				{imagenes && (
					<Col sm={3} md={4} className="justify-content-md-center">
						<h4>Detalle del Producto</h4>
						<CardProducto producto={productos} imagen={imagenes} />
					</Col>
				)}
			</Row>
		</Container>
	);
};

export default SelectAnidados;

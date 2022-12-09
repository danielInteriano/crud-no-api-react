import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const inicialDb = [
	{ id: 1, name: 'Seiya', constelacion: 'Pegaso' },
	{ id: 2, name: 'Shiryu', constelacion: 'Dragón' },
	{ id: 3, name: 'Hyoga', constelacion: 'Cisne' },
	{ id: 4, name: 'Shun', constelacion: 'Andrómeda' },
	{ id: 5, name: 'Ikky', constelacion: 'Fénix' },
];

const CrudApp = () => {
	const [db, setDb] = useState(inicialDb);

	return (
		<div>
			<h2>CRUD APP sin API</h2>
			<CrudForm></CrudForm>
			<CrudTable data={db}></CrudTable>
		</div>
	);
};

export default CrudApp;

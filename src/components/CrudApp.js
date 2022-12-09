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
	const [dataToEdit, setDataToEdit] = useState(null);

	const createData = (data) => {
		data.id = Date.now();
		setDb([...db, data]);
	};

	const updateData = (data) => {};
	const deleteData = (id) => {};

	return (
		<div>
			<h2>CRUD APP sin API</h2>
			<CrudForm
				createData={createData}
				updateData={updateData}
				dataToEdit={dataToEdit}
				setDataToEdit={setDataToEdit}
			></CrudForm>
			<CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}></CrudTable>
		</div>
	);
};

export default CrudApp;

import './App.css';
import CrudApi from './components/CrudApi';
import CrudApiJsonServer from './components/CrudApiJsonServer';
import CrudApp from './components/CrudApp';
import CrudBuscadorCanciones from './components/CrudBuscadorCanciones';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<hr />
				<CrudBuscadorCanciones />
				<hr />
				<CrudApiJsonServer />
				<hr />
				<CrudApi />
				<hr />
				<CrudApp />
			</header>
		</div>
	);
}

export default App;

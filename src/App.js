import './App.css';
import CrudApi from './components/CrudApi';
import CrudApiJsonServer from './components/CrudApiJsonServer';
import CrudApp from './components/CrudApp';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<hr />
				<CrudApiJsonServer></CrudApiJsonServer>
				<hr />
				<CrudApi></CrudApi>
				<hr />
				<CrudApp></CrudApp>
			</header>
		</div>
	);
}

export default App;

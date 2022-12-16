import './App.css';
import ContactForm from './components/ContactForm';
import CrudApi from './components/CrudApi';
import CrudApiJsonServer from './components/CrudApiJsonServer';
import CrudApp from './components/CrudApp';
import CrudBuscadorPaises from './components/CrudBuscadorPaises';
import SelectAnidados from './components/SelectAnidados';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<hr />
				<ContactForm />
				<hr />
				<SelectAnidados />
				<hr />
				<CrudBuscadorPaises />
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

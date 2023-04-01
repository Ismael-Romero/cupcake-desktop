import { Input } from "./components/index.jsx";
import { useForm } from "./hooks/useForm.js";

function App() {
	
	const formInit = {
		fullName: {
			id: 'in-fullName',
			key: 'fullName',
			value: '',
			required: true
		},
		age: {
			id: 'in-age',
			key: 'age',
			value: '',
			required: false
		},
		date: {
			id: 'in-date',
			key: 'date',
			value: '',
			required: true
		},
	};
	
	const {onChange, onReset, stateCurrent, isValidFields} = useForm(formInit);
	
	const {fullName, age, date} = stateCurrent;

	function Hello (e) {
		e.preventDefault();
		if (isValidFields() > 0){
			console.log('Completa el formulacrio');
		}else{
			onReset(formInit);
		}
	}
	
	return (
        <div className="container">
	        
	        <form style={{width: 300, height: 400, marginTop: 100, marginLeft: 100}}>
		        
		        <Input
			        Field={fullName}
			        OnChange={onChange}
			        Placeholder='Ingresa tu Nombre:'
		        />
		
		        <Input
			        Field={date}
			        OnChange={onChange}
			        Placeholder='Tu fecha'
		        />
		
		        <Input
			        Field={age}
			        OnChange={onChange}
			        Placeholder='tu edad'
		        />
		        
		        <button onClick={(e) => Hello(e)}> PUSH </button>
	        </form>
        </div>
    );
}

export default App;

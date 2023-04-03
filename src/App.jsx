import { fakeListDataShort } from "./data/fake-list.js";
import {useState} from "react";
import {LayoutInputGroup} from "./components/layouts/index.jsx";
import {Button, Input, Link, Selected, Text, Title} from "./components/index.jsx";
import {useForm} from "./hooks/useForm.js";

function App() {
	
	const initForm = {
		name: {
			id: 'in-name',
			key: 'name',
			value: '',
			required: false,
		},
	};
	
	const [optionId, setOptionId] = useState('');
	const {onChange, onReset, stateCurrent, isValidFields} = useForm(initForm);
	const {name} = stateCurrent;
	
	return (
        <div className="container" style={{ width:440, height: 300, margin: "auto"}}>
	        <br/>

	        <Title Text='Login'/>
	        <Link Text='This is a link'/>
	        <Text Content='Esto es un texto'/>
	        
	        <LayoutInputGroup Label='Full Name' Type='row'>
		        <Input
			        Field={name}
			        Placeholder='Hola Mundo'
			        OnChange={onChange}/>
			</LayoutInputGroup>
	        
	        <LayoutInputGroup Label='Full Name' Type='column'>
		        <Input
			        Field={name}
			        Placeholder='Hola Mundo'
			        OnChange={onChange}/>
	        </LayoutInputGroup>
	        
	        <Selected
		       Field={{
				   id: 'list-users',
			       label: 'Facturas emitidas',
			       placeholder: 'Selecciona una factura',
		       }}
		       Data={fakeListDataShort}
		       HandleClick={setOptionId}
	        />
	        
	        <Button Text='Hola Mundo' Type='warning'/>

        </div>
    );
}

export default App;

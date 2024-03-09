
import BoxLogin from "../../components/BoxLogin"
import './styleCadastro.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import { isEmail } from "validator";
import axios from "../../services/axios";
import {get} from 'lodash'

function Cadastro() {
   
   const [values, setValues] = useState({
    email: '',
    name: '',
    password: ''
   });
   const [errors,setErrors]=useState({});
   console.log(errors)
   
   const handleChange = (e)=>{
    
    const { name, value } = e.target;
    setValues({
        ...values,
        [name]: value
    })
    
   }
   const  validaForm = async (e)=>{
   
    const newErrors={};
    if(!isEmail(values.email)){
        newErrors.email = 'Email com campo vazio ou com formato inválido'
    }
    if(!values.password || values.password.length < 5){
        newErrors.password = 'A senha é obrigatório e deve ter mais que 5 caractéres'
    }
    if(!values.name || values.name.length < 3){
        newErrors.name = 'O nome é obrigatório e deve ter mais que 3 caractéres'
    }
    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
   } else {
    try {
        const response = await axios.post('/cadastrar', values);
        console.log(response.data)
    } catch (e) {
     
        const errors = get(e, 'response.data');
        if(errors) return setErrors({emailExiste: "O E-mail já existe"})
        console.log(e)
        
    }
   }
}
    return (
        <div className="container">
            <div className="containerCadastro">
                <h2>Cadastro</h2>
               <BoxLogin 
               cadastro
               onChange={handleChange}
               errors={errors}
               values={values}
               />
                <button className="cadastrar" onClick={validaForm}>Cadastrar</button>
                <Link to="/">
                    <button className="cancelar">Cancelar</button>
                </Link>
            </div>
        </div>
    )
}
export default Cadastro
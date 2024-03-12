import React from "react";
import './styleLogin.css';
import BoxLogin from "../../components/BoxLogin";
import ImgLogin from '../../imgs/imgLogin.png';
import { Link } from "react-router-dom"; 
import { isEmail } from "validator";
import { useState } from "react";
import {  useDispatch } from "react-redux";
import * as exampleAction from '../../store/modules/example/action';




function Login() {
   
    const dispatch = useDispatch();
    function handleClick(e){
        e.preventDefault();
        dispatch(exampleAction.clicaBotaoRequest());
    }
    const [errors, setErrors] = useState({})

    const [values, setValues] = useState({
        email:'',
        password:''
    });
console.log(values)
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
       
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
           
       } else {
            setErrors("sem erro")
    }
    console.log("errors:",errors)
    }

    return (
        <div className="container">
            <div className="image">
                <img className="img-login" src={ImgLogin}/>

            </div>
            <div className="containerLogin">
                <h2>Login</h2>
               <BoxLogin
               login
               onChange={handleChange}
               values={values}
               />
               <Link to="/Home">
               <button className="entrar" onClick={validaForm}>Entrar</button>
               </Link>
                <Link to="/cadastro">               
                 <button className="btn-cadastrar">Cadastrar</button>
                </Link>

            </div>
        </div>
    );
}

export default Login
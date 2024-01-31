import React from "react";
import './styleLogin.css';
import BoxLogin from "../../components/BoxLogin";
import ImgLogin from '../../imgs/imgLogin.png';
import { Link } from "react-router-dom"; 
import { useState } from "react";

// function initialState (){
//     return {email: '', password:'', nome:''};
// }
// function LoginUser({user,password}){
//     if(user === 'admin' && password === 'admin'){
//         return {token: '1234'};
//     }
//     return {error: "usuário ou senha inválido"}
// }

function Login() {
    // const [values, setValues] = useState(initialState);
    
    // function onChange(event){
    //     const {name, value} = event.target;
    //     setValues({
    //         ...values,
    //         [name]: value,
    // })
    // }
    return (
        <div className="container">
            <div className="image">
                <img className="img-login" src={ImgLogin}/>

            </div>
            <div className="containerLogin">
                <h2>Login</h2>
               <BoxLogin
            //    onChange={onChange}
            //    values={values}
               />
               <Link to="/Home">
               <button className="entrar">Entrar</button>
               </Link>
                <Link to="/cadastro">               
                 <button className="btn-cadastrar">Cadastrar</button>
                </Link>

            </div>
        </div>
    );
}

export default Login
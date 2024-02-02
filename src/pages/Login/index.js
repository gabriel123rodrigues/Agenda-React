import React from "react";
import './styleLogin.css';
import BoxLogin from "../../components/BoxLogin";
import ImgLogin from '../../imgs/imgLogin.png';
import { Link } from "react-router-dom"; 
import { useState } from "react";
import {  useDispatch } from "react-redux";
import * as exampleAction from '../../store/modules/example/action';




function Login() {
   
    const dispatch = useDispatch();
    function handleClick(e){
        e.preventDefault();
        dispatch(exampleAction.clicaBotaoRequest());
    }
    return (
        <div className="container">
            <div className="image">
                <img className="img-login" src={ImgLogin}/>

            </div>
            <div className="containerLogin">
                <h2>Login</h2>
               <BoxLogin
               />
               <Link to="/Home">
               <button className="entrar" onClick={handleClick}>Entrar</button>
               </Link>
                <Link to="/cadastro">               
                 <button className="btn-cadastrar">Cadastrar</button>
                </Link>

            </div>
        </div>
    );
}

export default Login
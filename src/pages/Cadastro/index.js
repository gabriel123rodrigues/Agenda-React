
import BoxLogin from "../../components/BoxLogin"
import './styleCadastro.css';
import { Link } from "react-router-dom";
import { useState } from "react";





function Cadastro() {
   
    
   
    return (
        <div className="container">
            <div className="containerCadastro">
                <h2>Cadastro</h2>
               <BoxLogin 
               cadastro
               />
                <button className="cadastrar">Cadastrar</button>
                <Link to="/">
                    <button className="cancelar">Cancelar</button>
                </Link>
            </div>
        </div>
    )
}
export default Cadastro
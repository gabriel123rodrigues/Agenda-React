import React from 'react'
import './styleContato.css';
import { Link } from 'react-router-dom';

function NovoContato() {

    return (
        <section className='container-add'>
            <div className='add-foto'></div>    

            <div className="container-cadastro-contato">
                
                <div className="nome-novo">
                    <label className='label' >Nome:</label>
                    <input type="text" placeholder="Nome"></input>
                </div>
                <div className="email-novo">
                    <label className='label' >Email:</label>
                    <input type="text" placeholder="E-mail"></input>
                </div>
                <div className="telefone">
                    <label className='label' >telefone:</label>
                    <input type="text" placeholder="Telefone"></input>
                </div>
                

            </div>
            <button className="salvar">Salvar</button>
                <Link to="/Home">
                    <button className="btn-cancelar">Cancelar</button>
                </Link>
        </section>
    )

}

export default NovoContato
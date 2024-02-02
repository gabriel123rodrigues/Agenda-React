import React from "react";
import NavBar from "../../components/NavBar";
import Contatos from "../../components/Contato";
import { Link } from "react-router-dom";
import {get} from 'lodash';
import axios from '../../services/axios';
import { useEffect, useState} from "react";
import './styleHome.css';
import { FaUserCircle} from 'react-icons/fa';


function Home() {

    const [contatos, setContatos] = useState([{}]);
    useEffect(()=>{
        async function getData(){
            //rota ainda não existe adicione a rota dos contatos;
            // const response = axios.get('/contatos');
            setContatos([{
                nome: 'gabriel',
                email:'gabriel@gmail.com',
                telefone:'000000'
        }]);
        }
        getData();
    },[])


    return (
        <>
            <NavBar />
            <div className="container-home">
                <section className="container-contatos">
                    <h4>Contatos</h4>
                    <div className="contatos">
                        <Contatos contatos={contatos}/>
                    </div>
                    <div className="btn-novo">
                    <Link  to="/novocontato">
                    <button className="btn-novo">Novo Contato</button>
                    </Link>
                    </div>
                    
                </section>
                <section className="container-infos">
                    <div className="foto" key={contatos.id}>
                    {
                        contatos.map(contato=>(
                            get(contato, 'foto.url',false)?(
                               <img src={contato.foto.url}/>
                            ) : (
                                <FaUserCircle size={260}/>
                            )
                        ))
                        }
                    </div>
                    <div className="nome" key={contatos.id}><h3>{
                        contatos.map(contato=>(
                            contato.nome
                        ))
                        }</h3></div>
                    <div className="email" key={contatos.id}><h3>{
                        contatos.map(contato=>(
                            contato.email
                        ))
                        }</h3></div>
                    <div className="telefone" key={contatos.id}><h3>{
                        contatos.map(contato=>(
                            contato.telefone
                        ))
                        }</h3></div>

                </section>
            </div>
        </>
    )
}

export default Home
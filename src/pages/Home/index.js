import React from "react";
import NavBar from "../../components/NavBar";
import Contatos from "../../components/Contato";
import { Link } from "react-router-dom";
import './styleHome.css'
function Home() {
    return (
        <>
            <NavBar />
            <div className="container-home">
                <section className="container-contatos">
                    <h4>Contatos</h4>
                    <div className="contatos">
                        <Contatos />
                        
                    </div>
                    <div className="btn-novo">
                    <Link  to="/novocontato">
                    <button className="btn-novo">Novo Contato</button>
                    </Link>
                    </div>
                    
                </section>
                <section className="container-infos">
                    <div className="foto"></div>
                    <div className="nome"><h3>Nome</h3></div>
                    <div className="email"><h3>alguem@gmail</h3></div>
                    <div className="telefone"><h3>000-000</h3></div>

                </section>
            </div>
        </>
    )
}

export default Home
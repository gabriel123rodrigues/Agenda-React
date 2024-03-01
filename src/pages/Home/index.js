import React from "react";
import NavBar from "../../components/NavBar";
import Contatos from "../../components/Contato";
import { Link } from "react-router-dom";
import { get } from 'lodash';
import axios from '../../services/axios';
import { useEffect, useState } from "react";
import './styleHome.css';
import { FaUserCircle } from 'react-icons/fa';


function Home() {

    const [fotos, setFotos] = useState([]);
    const [contatos, setContatos] = useState([]);
    const [contatoSelecionado, setContatoSelecionado] = useState(null);
    const [fotoSelecionada, setFotoSelecionada] = useState([]);
    console.log('fotoselecionada', fotoSelecionada)


    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTBhZjhlOGM4M2MwYTEyNjdiZTU0MSIsImlhdCI6MTcwOTIyMzg1OSwiZXhwIjoxNzExODE1ODU5fQ.VfEe3StB3w3C-6is_XVK2nq4OVrKAYdbb_3NuTjGCHg'

    useEffect(() => {
        const getData = async () => {
            try {

                const response = await axios.get('/contatos',
                    {
                        headers: {
                            'Authorization': token
                        }
                    });

                setContatos(response.data)

                if (!contatoSelecionado && response.data.length > 0) {
                    setContatoSelecionado(response.data[0]);
                }
            } catch (error) {
                console.log(error)
            }

        }
        getData();
    }, [])

    useEffect(() => {
        const getFotos = async () => {
            try {

                const response = await axios.get(`/fotos/all`, {

                    headers: {
                        'Authorization': token
                    },
                  

                });
              
                setFotos(response.data.fotos);
            } catch (error) {
                console.log(error)
            }

        }
        getFotos();

    }, [])
    // console.log('contatos:', contatos, "fotos:", fotos)
    // console.log('contatoSlecionado:', contatoSelecionado)


    const handleContatoClick = (contato) => {
        setContatoSelecionado(contato);
    }
    
    useEffect(()=>{
        const findPicture = () =>{
        
            const fotoDoContato = fotos.find(foto => foto.contatoUser === contatoSelecionado._id);
            console.log('fotodocontato:', fotoDoContato)
            if(fotoDoContato){
                setFotoSelecionada(fotoDoContato.url)
            } else {
                setFotoSelecionada(null)
            }
        }
        findPicture();
    },[contatoSelecionado])
    return (
        <>
            <NavBar />
            <div className="container-home">
                <section className="container-contatos">
                    <h4>Contatos</h4>
                    <div className="contatos">
                        {
                            contatos.map(contato => (
                                <Contatos key={contato._id} contato={contato} onClickContato={handleContatoClick} />
                            ))
                        }
                    </div>
                    <div className="btn-novo">
                        <Link to="/novocontato">
                            <button className="btn-novo">Novo Contato</button>
                        </Link>
                    </div>

                </section>
                <section className="container-infos">
                    {/* preciso arrumar a parte de buscar a foto */}
                    <div className="foto">
                        {
                            
                           fotoSelecionada  ? (

                                    <img src={fotoSelecionada} className="img-foto"/>

                                )
                                    : (
                                        <FaUserCircle size={260} />
                                    )
                            
                        }
                    </div>
                    <div className="nome"><h3>{
                        contatoSelecionado && contatoSelecionado.name
                    }</h3></div>
                    <div className="email" ><h3>{
                        contatoSelecionado && contatoSelecionado.email
                    }</h3></div>
                    <div className="telefone" ><h3>{
                        contatoSelecionado && contatoSelecionado.telefone
                    }</h3></div>

                </section>
            </div>
        </>
    )
}

export default Home

import './styleContato.css';
import {Link} from 'react-router-dom';
import React from 'react';
import {FaRegEdit} from 'react-icons/fa';
import { MdOutlineDeleteForever } from "react-icons/md";
function Contatos ({contato, onClickContato}){
    // const handleclick = (contato)=>{
    //     setContatoSelecionado(contato);
    // }
    return (
        
        <div className='container-contato' onClick={()=> onClickContato(contato)}>
            <h5 className='contato'>
               {contato.name}
            </h5>
            <div>
            <Link><FaRegEdit size={18}/></Link>
            <Link><MdOutlineDeleteForever size={20}/></Link>
            </div>
        </div>
        
    )
}

export default Contatos
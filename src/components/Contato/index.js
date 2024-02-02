
import './styleContato.css';
import {Link} from 'react-router-dom';
import React from 'react';
import {FaRegEdit} from 'react-icons/fa';
import { MdOutlineDeleteForever } from "react-icons/md";
function Contatos ({contatos}){
    return (
        
        <div className='container-contato'>
            <h5 className='contato'>{
                contatos.map(contato=>(
                    contato.nome
                ))
            }</h5>
            <div>
            <Link><FaRegEdit size={18}/></Link>
            <Link><MdOutlineDeleteForever size={20}/></Link>
            </div>
        </div>
        
    )
}

export default Contatos
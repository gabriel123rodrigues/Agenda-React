import React from "react";
import './stylesBox.css';


function BoxLogin({ cadastro}) {
    
    return (
        <div className="box">

            <div className="email">
                <label >Email</label>
                <input type="text" 
                name="email" 
                // onchange={onChange} 
                // value={values.email} 
                placeholder="E-mail"
                 ></input>
            </div>
            {
               cadastro && (
            <div className="nome">
                <label >Nome:</label>
                <input type="text"
                 name="nome" 
                // onChange={onChange} 
                // value={values.nome} 
                placeholder="Nome"
                ></input>
            </div>)
            }
            <div className="senha">
                <label >Senha</label>
                <input type="password"
                 name="password"
                //   onChange={onChange} 
                //   value={values.password} 
                  placeholder="Senha"></input>
            </div>

        </div>
    )
}

export default BoxLogin
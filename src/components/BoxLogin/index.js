import React from "react";
import './stylesBox.css';


function BoxLogin({ cadastro, onChange, values, errors }) {
    
    return (
        <div className="box">

            <div className="email">
                <label >Email</label>
                <input type="text" 
                name="email" 
                onChange={onChange}
                value={values.email}
                placeholder="E-mail"
                 ></input>

                    { errors && errors.email && <span className="error">{errors.email}</span>}

            </div>
            {
               cadastro && (
            <div className="nome">
                <label >Nome:</label>
                <input type="text"
                name="name" 
                onChange={onChange}
                value={values.name} 
                placeholder="Nome"
                ></input>
            </div>)
            }
            <div className="senha">
                <label >Senha</label>
                <input type="password"
                 name="password"
                 onChange={onChange}
                 value={values.password}
                 placeholder="Senha"></input>
            </div>

        </div>
    )
}

export default BoxLogin
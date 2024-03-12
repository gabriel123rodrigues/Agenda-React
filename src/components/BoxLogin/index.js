import React from "react";
import './stylesBox.css';


function BoxLogin({ cadastro, onChange, values, errors, login }) {

    return (
        <div className="box">
            {cadastro && (
                <div className="email">
                    <label >Email</label>
                    <input type="text"
                        name="email"
                        onChange={onChange}
                        value={values.email}
                        placeholder="E-mail"
                    ></input>

                    {errors && errors.email && <span className="error">{errors.email}</span>}
                    {errors && <span className="error">{errors.emailExiste}</span>}

                </div>)}
            {
                login && (
                    <div className="email">
                        <label >Email</label>
                        <input type="text"
                            name="email"
                            onChange={onChange}
                            value={values.email}
                            placeholder="E-mail"
                        ></input>

                        {errors && errors.email && <span className="error">{errors.email}</span>}
                        {errors && <span className="error">{errors.emailExiste}</span>}

                    </div>)}



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
                        {errors && errors.name && <span className="error">{errors.name}</span>}

                    </div>)
            }
            
            {
            login && (<div className="senha">
                <label >Senha</label>
                <input type="password"
                    onChange={onChange}
                    value={values.password}
                    name="password"
                    placeholder="Senha"></input>
                {errors && errors.password && <span className="error">{errors.password}</span>}

            </div>
            )}
            {
            cadastro && (
                <div className="senha">
                    <label >Senha</label>
                    <input type="password"
                        name="password"
                        onChange={onChange}
                        value={values.password}
                        placeholder="Senha"></input>
                    {errors && errors.password && <span className="error">{errors.password}</span>}

                </div>)}


        </div>
    )
}

export default BoxLogin
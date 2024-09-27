import React from "react";
import './styles.css';
import logo from '../../assets/logo1.png';
import logotask from '../../assets/Logotask.webp'

export default function Login(){
    return(
        <div className="login-container">
            <section className="form">
                <img src={logo} alt="Logo Todo"/>
                <form>
                    <h1>Acesse Sua Conta</h1>
                    <input placeholder="Username" type="text"/>
                    <input placeholder="Senha" type="password"/>
                    <button className='button' type="submit">Acessar</button>
                </form>
            </section>
            <img src={logotask} alt="Login"/>
        </div>
        );
}

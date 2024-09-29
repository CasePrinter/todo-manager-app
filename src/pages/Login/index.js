import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'
import './styles.css';
import logo from '../../assets/logo1.png';
import logotask from '../../assets/Logotask.webp'

import api from '../../services/api'

export default function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function login(e) {
        e.preventDefault();

        const data = {
            username,
            password,
        };

        try {
            const response = await api.post('auth/signin',data)
            localStorage.setItem('username', username);
            localStorage.setItem('accessToken', response.data.accessToken);
            navigate('/todos');

        } catch (error) {
            alert(`Login falhou, tente novamente!`)
        }

    };

    return(
        <div className="login-container">
            <section className="form">
                <img src={logo} alt="Logo Todo"/>
                <form onSubmit={login}>
                    <h1>Acesse Sua Conta</h1>
                    <input 
                        type="text"
                        placeholder="Username" 
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input 
                        type="password"
                        placeholder="Senha" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button className='button' type="submit">Acessar</button>
                </form>
            </section>
            <img src={logotask} alt="Login"/>
        </div>
        );
}

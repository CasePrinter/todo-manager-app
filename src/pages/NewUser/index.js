import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom'
import './styles.css';
import logo from '../../assets/logo1.png';

import {FiArrowLeft} from 'react-icons/fi'

import api from '../../services/api'

export default function NewUser(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    async function addUser(e) {
        e.preventDefault();

        const data = {
            username,
            password,
            email
        };

        try {
            const response = await api.post('auth/signup',data)
            navigate('/todos')
        } catch (error) {
            alert(`Criação de Usuário Falhou!`)
        }

    };

    return(
        <div className="login-container">
            <section className="form">
                <img src={logo} alt="Logo Todo"/>
                <form onSubmit={addUser}>
                    <h1>Criar Usuário</h1>
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
                    <input 
                        type="email"
                        placeholder="Email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <button className='button' type="submit">Adicionar</button>
                    <Link rel="stylesheet" to="/todos" className="back-link">
                        <FiArrowLeft size={16} color="#251Fc5"/>
                        Voltar
                    </Link> 
                </form>
            </section>
        </div>
        );
}

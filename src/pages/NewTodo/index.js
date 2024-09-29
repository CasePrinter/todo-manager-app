import React, {useState} from "react";
import { Link , useNavigate} from "react-router-dom";
import './styles.css'
import '../../global.css'

import {FiArrowLeft} from 'react-icons/fi'

import logo from '../../assets/logo1.png';

import api from '../../services/api'

export default function NewTodo(){


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadlineDate, setDeadeLineDate] = useState('');
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    const accessToken = localStorage.getItem('accessToken');

    
    async function createNewTodo(e) {
        e.preventDefault();
        
        const data ={
            title,
            description,
            deadlineDate,
            priority,
            status,
        }

        

        try {
            console.log(`Token new: ${accessToken}`)
            await api.post('todo',data,{headers:{ Authorization: `Bearer ${accessToken}`, "Content-Type": 'application/json'}})
            navigate('/todos');
        } catch (error) {
            alert('Erro ao gravar a tarefa! tente novamente')
        }

    }

    return(
        <div className="new-todo-container">
            <div className="content">
                <section className="form">
                    <img src={logo} alt='LOGO'/>
                    <h1>Adicionar nova Tarefa</h1>
                    <p>Insira as informações e clique em "Adicionar"!</p>
                    <Link rel="stylesheet" to="/todos" className="back-link">
                        <FiArrowLeft size={16} color="#251Fc5"/>
                        Home
                    </Link> 
                </section>
                <form onSubmit={createNewTodo} >
                    <input 
                        type="text" 
                        placeholder="Título"
                        value= {title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Descrição"
                        value= {description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                        type="date" 
                        placeholder="Data limite"
                        value= {deadlineDate}
                        onChange={e => setDeadeLineDate(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Prioridade"
                        value= {priority}
                        onChange={e => setPriority(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Status"
                        value= {status}
                        onChange={e => setStatus(e.target.value)}
                    />
                    <button type="submit">Adicionar</button>
                </form>
            </div>
        </div>
    )
}
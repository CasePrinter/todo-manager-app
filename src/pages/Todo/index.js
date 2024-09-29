import React, { useState, useEffect} from "react";

import './styles.css'

import api from '../../services/api'


import logo from '../../assets/logo1.png'

import { Link, useNavigate} from "react-router-dom";
import {FiPower, FiEdit, FiTrash2} from 'react-icons/fi'

export default function Todos(){
    const username = localStorage.getItem('username');
    const accessToken = localStorage.getItem('accessToken');
    const navigate = useNavigate();

    const [todos, setTodos] = useState([]);

    async function logout() {
        localStorage.clear()
        navigate('/');
    }

        async function editTodo(id){
            try {
                navigate(`new/${id}`);
            } catch (error) {
                alert('Houve uma falha ao editar.')
            }
        }
        async function deleteTodo(id){
        try {
            await api.delete(`todo/${id}`,{headers:{ Authorization: `Bearer ${accessToken}`, "Content-Type": 'application/json'}})
            setTodos(todos.filter(todo => todo.id !== id))
        } catch (error) {
            alert('Houve uma falha ao deletar.')
        }
    }

    useEffect(() => {
        api.get('todo',{headers:{ Authorization: `Bearer ${accessToken}`, "Content-Type": 'application/json'}}).then(response =>{
            setTodos(response.data)
        })
    });


    return (
        <div className="todo-container">
            <header>
                <img src={logo} alt="LOGO" />
                <span>Bem vindo, <strong>{username.toUpperCase()} </strong></span>
                <Link className="button" to="new/0">Adicione uma nova tarefa</Link>
                <button type="button" onClick={logout}><FiPower size={18} color="#2D3E50"/></button>
            </header>

            <h1>Tarefas</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <p> ID: {todo.id} </p>
                        <strong>Título:</strong>
                        <p>{todo.title}</p>
                        <strong>Descrição:</strong>
                        <p>{todo.description}</p>
                        <strong>Data de Vencimento:</strong>
                        <p>{Intl.DateTimeFormat('pt-BR').format(new Date(todo.deadlineDate))}</p>
                        <strong>Prioridade:</strong>
                        <p>{todo.priority}</p>  
                        <strong>Status:</strong>
                        <p>{todo.status}</p>   

                        <button type="button" onClick={() => editTodo(todo.id)}>
                            <FiEdit size={20} color="#251Fc5"/>
                        </button> 
                        <button type="button" onClick={() => deleteTodo(todo.id)}>
                            <FiTrash2 size={20} color="#FF0000"/>
                        </button>     
                    </li>
                ))}               
            </ul>
        </div>
    );
}
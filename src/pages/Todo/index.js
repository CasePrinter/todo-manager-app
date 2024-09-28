import React from "react";

import './styles.css'


import logo from '../../assets/logo1.png';

import { Link } from "react-router-dom";
import {FiPower, FiEdit, FiTrash2} from 'react-icons/fi'

export default function Todos(){
    return (
        <div className="todo-container">
            <header>
                <img src={logo} alt="LOGO" />
                <span>Bem vindo, <strong>Luis </strong></span>
                <Link className="button" to="new">Adicione uma nova tarefa</Link>
                <button type="button"><FiPower size={18} color="#2D3E50"/></button>
            </header>

            <h1>Tarefas</h1>
            <ul>
                <li>
                    <strong>Título:</strong>
                    <p>Nome da Tarefa</p>
                    <strong>Descrição:</strong>
                    <p>Descriçao da Tarefa</p>
                    <strong>Data de Vencimento:</strong>
                    <p>01/01/2022</p>
                    <strong>Prioridade:</strong>
                    <p>ALTA</p>  
                    <strong>Status:</strong>
                    <p>Aberto</p>   

                    <button type="button">
                        <FiEdit size={20} color="#251Fc5"/>
                    </button> 
                    <button type="button">
                        <FiTrash2 size={20} color="#FF0000"/>
                    </button>     
                </li>

                <li>
                    <strong>Título:</strong>
                    <p>Nome da Tarefa</p>
                    <strong>Descrição:</strong>
                    <p>Descriçao da Tarefa</p>
                    <strong>Data de Vencimento:</strong>
                    <p>01/01/2022</p>
                    <strong>Prioridade:</strong>
                    <p>ALTA</p>  
                    <strong>Status:</strong>
                    <p>Aberto</p>   

                    <button type="button">
                        <FiEdit size={20} color="#251Fc5"/>
                    </button> 
                    <button type="button">
                        <FiTrash2 size={20} color="#FF0000"/>
                    </button>     
                </li>

                <li>
                    <strong>Título:</strong>
                    <p>Nome da Tarefa</p>
                    <strong>Descrição:</strong>
                    <p>Descriçao da Tarefa</p>
                    <strong>Data de Vencimento:</strong>
                    <p>01/01/2022</p>
                    <strong>Prioridade:</strong>
                    <p>ALTA</p>  
                    <strong>Status:</strong>
                    <p>Aberto</p>   

                    <button type="button">
                        <FiEdit size={20} color="#251Fc5"/>
                    </button> 
                    <button type="button">
                        <FiTrash2 size={20} color="#FF0000"/>
                    </button>     
                </li>

                <li>
                    <strong>Título:</strong>
                    <p>Nome da Tarefa</p>
                    <strong>Descrição:</strong>
                    <p>Descriçao da Tarefa</p>
                    <strong>Data de Vencimento:</strong>
                    <p>01/01/2022</p>
                    <strong>Prioridade:</strong>
                    <p>ALTA</p>  
                    <strong>Status:</strong>
                    <p>Aberto</p>   

                    <button type="button">
                        <FiEdit size={20} color="#251Fc5"/>
                    </button> 
                    <button type="button">
                        <FiTrash2 size={20} color="#FF0000"/>
                    </button>     
                </li>

                <li>
                    <strong>Título:</strong>
                    <p>Nome da Tarefa</p>
                    <strong>Descrição:</strong>
                    <p>Descriçao da Tarefa</p>
                    <strong>Data de Vencimento:</strong>
                    <p>01/01/2022</p>
                    <strong>Prioridade:</strong>
                    <p>ALTA</p>  
                    <strong>Status:</strong>
                    <p>Aberto</p>   

                    <button type="button">
                        <FiEdit size={20} color="#251Fc5"/>
                    </button> 
                    <button type="button">
                        <FiTrash2 size={20} color="#FF0000"/>
                    </button>     
                </li>
            </ul>
        </div>
    );
}
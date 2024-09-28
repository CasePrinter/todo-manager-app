import React from "react";
import { Link } from "react-router-dom";
import './styles.css'
import '../../global.css'

import {FiArrowLeft} from 'react-icons/fi'

import logo from '../../assets/logo1.png';

export default function NewTodo(){
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
                <form >
                    <input type="text" placeholder="Título"/>
                    <input type="text" placeholder="Descrição"/>
                    <input type="date" placeholder="Data limite"/>
                    <input type="text" placeholder="Prioridade"/>
                    <input type="text" placeholder="Status"/>
                    <button type="submit">Adicionar</button>
                </form>
            </div>
        </div>
    )
}
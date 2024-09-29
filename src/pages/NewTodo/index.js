import React, {useState, useEffect} from "react";
import { Link , useNavigate, useParams} from "react-router-dom";
import './styles.css'
import '../../global.css'

import {FiArrowLeft} from 'react-icons/fi'

import logo from '../../assets/logo1.png';

import api from '../../services/api'

export default function NewTodo(){

    const [id, setId] = useState(null)
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadlineDate, setDeadeLineDate] = useState('');
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('');
    const navigate = useNavigate();
    const {todoId} = useParams()

    const accessToken = localStorage.getItem('accessToken');

    useEffect(() => {
        if(todoId === '0')return;
        else loadTodo();
    }, [todoId])

    async function loadTodo(){
        try {
            const response = await api.get(`todo/${todoId}`,{headers:{ Authorization: `Bearer ${accessToken}`, "Content-Type": 'application/json'}})
            let formatData = response.data.deadlineDate.split("T",10)[0]

            const prioritySelecionado = response.data.priority
            const statusSelecionado = response.data.status

            document.getElementById("priority").value = prioritySelecionado
            document.getElementById("status").value = statusSelecionado

            setId(response.data.id)
            setTitle(response.data.title)
            setDescription(response.data.description)
            setDeadeLineDate(formatData)
            setPriority(response.data.priority)
            setStatus(response.data.status)
        } catch (error) {
            alert('Erro ao carregar a tarefa! tente novamente')
            navigate('/todos')
        }
    }
    
    async function saveOrUpdate(e) {
        e.preventDefault();
        
        const data ={
            title,
            description,
            deadlineDate,
            priority,
            status,
        }

        

        try {

            if(todoId === '0'){
                await api.post('todo',data,{headers:{ Authorization: `Bearer ${accessToken}`, "Content-Type": 'application/json'}})
            }else{
                await api.patch(`todo/${todoId}`,data,{headers:{ Authorization: `Bearer ${accessToken}`, "Content-Type": 'application/json'}})
            }
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
                    <h1>{todoId === '0' ? 'Adicionar nova Tarefa' : `Atualizar tarefa ID: ${todoId}`}</h1>
                    <p>Insira as informações e clique em "Adicionar"! </p>
                    <Link rel="stylesheet" to="/todos" className="back-link">
                        <FiArrowLeft size={16} color="#251Fc5"/>
                        Voltar
                    </Link> 
                </section>
                <form onSubmit={saveOrUpdate} >
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
                    <select name="priority" id="priority" onChange={e => setPriority(e.target.value)}>
                        <option value="LOW">Baixa</option>
                        <option value="MEDIUM">Média</option>
                        <option value="HIGH">Alta</option>
                    </select>
                    <select name="status" id="status" onChange={e => setStatus(e.target.value)}>
                        <option value="WAITING">Esperando</option>
                        <option value="DOING">Fazendo</option>
                        <option value="FINISHED">Finalizado</option>
                    </select>
                    {/* <input 
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
                    /> */}
                    <button type="submit">{todoId === '0' ? 'Adicionar' : 'Atualizar'}</button>
                </form>
            </div>
        </div>
    )
}
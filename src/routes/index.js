
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Login from '../pages/Login'
import Todos from '../pages/Todo'
import NewTodo from '../pages/NewTodo'
import NewUser from '../pages/NewUser'

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/todos' element={<Todos/>}/>
                <Route path='/user/new' element={<NewUser/>}/>
                <Route path='/todos/new/:todoId' element={<NewTodo/>}/>
            </Routes>
        </BrowserRouter>
    )
}


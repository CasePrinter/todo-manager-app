
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Login from '../pages/Login'
import Todos from '../pages/Todo'
import NewTodo from '../pages/NewTodo'

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/todos' element={<Todos/>}/>
                <Route path='/todos/new/:todoId' element={<NewTodo/>}/>
            </Routes>
        </BrowserRouter>
    )
}


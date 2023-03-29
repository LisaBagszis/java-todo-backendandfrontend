import './App.css';
import Header from "./Header";
import {useEffect, useState} from "react";
import axios from "axios";
import {NewTodo, ToDo} from "./ToDo";
import AddTodo from "./AddTodo";
import ToDoGallery from "./TodoGallery";
import './TodoGallery.css';
import './TodoCard.css';
import './Header.css';
import useTodos from "./useTodos";
import EditView from "./EditView";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import TodoDetail from "./TodoDetail";






function App() {


    const {todos, addTodo, updateTodo, deleteTodo, changeMode, mode, currentTodo} = useTodos()
return (
    <BrowserRouter>
    <div className="App">
        <ToastContainer autoClose={3000}/>
        <Header/>
        <Routes>

       <Route path='/todos' element= {<ToDoGallery todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} changeMode={changeMode}/>}/>
            <Route path='/todos/edit' element={<EditView changeMode={changeMode} updateTodo={updateTodo} todo={currentTodo}/>}/>
        <Route path='/todos/add' element= {<AddTodo addTodo={addTodo}/>}/>
            <Route path='/todos/:id' element={<TodoDetail/>}/>
        </Routes>
    </div>
    </BrowserRouter>
    );

}

export default App;
//<Route element={<Navigate to='/todos'/>}/>
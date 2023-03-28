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






function App() {


    const {todos, addTodo, updateTodo, deleteTodo, changeMode, mode, currentTodo} = useTodos()
return (
    <div className="App">
        <ToastContainer autoClose={3000}/>
        <Header/>
        {mode === "overview" && <ToDoGallery todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} changeMode={changeMode}/>}
        {mode === "edit" && <EditView changeMode={changeMode} updateTodo={updateTodo} todo={currentTodo}/>}
        <AddTodo addTodo={addTodo}/>
    </div>
    );

}

export default App;
import React, {useEffect, useState} from 'react';
import './App.css';
import TodoBoards from "./TodoBoards";
import AddTodo from "./AddTodo";
import {NewTodo, Todo} from "./Todo";
import axios from "axios";

function App() {

    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(() => {
        loadAllTodos()
    }, [])

    function loadAllTodos() {
        return axios.get("/api/todo")
            .then(response => response.data)
            .then(setTodos)
            .catch(console.error)
    }

    function addTodo(todo: NewTodo) {
        return axios.post("/api/todo", todo)
            .then(response => response.data)
            .then(data => setTodos(prevState => [...prevState, data]))
    }

    function updateTodo(todo: Todo) {
        axios.put("/api/todo/" + todo.id, todo)
            .then(response => response.data)
            .then(data =>  setTodos(prevState => {
                return prevState.map(currentTodo => {
                    if (currentTodo.id === todo.id) {
                        return data
                    }
                    return currentTodo
                })
            }))
    }

    function deleteTodo(todoId: string) {
        axios.delete(`/api/todo/${todoId}`)
            .then(response => {
                setTodos(prevState => {
                    return prevState.filter(todo => todo.id !== todoId);
                });
            })
            .catch(console.error);
    }

    return (
        <div className="App">
            <AddTodo onAdd={addTodo}/>
            <TodoBoards todos={todos} updateTodo={updateTodo}/>
        </div>
    );
}

export default App;
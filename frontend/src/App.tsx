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




function App() {

    const [todos, setTodos] = useState<ToDo[]>([])

    useEffect(() => {
        loadAllToDos()
    }, [])

    function loadAllToDos() {
        axios.get("/api/todo")
            .then((getAllTodosResponse) => {
                setTodos(getAllTodosResponse.data)})
            .catch((error) => {console.error(error)})
    }

    function addTodo(newTodo: NewTodo) {
        axios.post("api/todo", newTodo)
            .then((addTodoResponse) => {
                setTodos([...todos, addTodoResponse.data])
            })
            .catch(console.error)
    }

    function updateTodo(todo : ToDo) {
    axios.put(`api/todo/${todo.id}`, todo)
        .then((updatedTodoResponse) => {
            setTodos(todos.map(currentTodo => {
                if (currentTodo.id === todo.id) {
                    return updatedTodoResponse.data
                }
                else {
                    return currentTodo
                }
            }))
        })
    }

    function deleteTodo(id: string) {
        axios.delete('api/todo/' + id)
            .then(() => {
                setTodos(todos.filter((todo) => todo.id !== id))
            })
            .catch(console.error)
    }


return (
    <div className="App">
        <Header/>
        <ToDoGallery todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
        <AddTodo addTodo={addTodo}/>
    </div>
    );

}

export default App;
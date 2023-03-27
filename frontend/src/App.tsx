import './App.css';
import './Header.css';
import Header from "./Header";
import {useEffect, useState} from "react";
import axios from "axios";
import {NewTodo, ToDo} from "./ToDo";
import AddTodo from "./AddTodo";
import ToDoGallery from "./TodoGallery";
//import ToDoGallery from "./ToDoGallery";


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



return (
    <div className="App">
        <Header/>
        <ToDoGallery todos={todos} />
        <AddTodo addTodo={addTodo}/>
    </div>
    );

}

export default App;
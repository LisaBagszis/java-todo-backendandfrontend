import {useEffect, useState} from "react";
import {NewTodo, ToDo} from "./ToDo";
import axios from "axios";
import {toast} from "react-toastify";
import error = toast.error;

export default function useTodos () {
    const [todos, setTodos] = useState<ToDo[]>([])
    const [mode, setMode] = useState<string>("overview")
    const [currentTodo, setCurrentTodo] = useState<ToDo>({id: "", description: "", status: "OPEN"})

    useEffect(() => {
        loadAllToDos()
    }, [])

    function loadAllToDos() {
        axios.get("/api/todo")
            .then((getAllTodosResponse) => {
                setTodos(getAllTodosResponse.data)})
            .catch((error) => {
                toast("Unkown Error, try again later!")})
    }

    function addTodo(newTodo: NewTodo) {
        axios.post("api/todo", newTodo)
            .then((addTodoResponse) => {
                setTodos([...todos, addTodoResponse.data])
            })
            .catch((error) => {
                toast("Unkown Error, try again later!")
            })
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

    function changeMode(newMode: string, id?: string, todo?: ToDo): void {
        setMode(newMode)
        if (id) {
            getTodoById(id)
        }
        if (todo) {
            setCurrentTodo(todo)
        }
    }

    function getTodoById(id: string): void {
        axios.get<ToDo>(`/api/todo/${id}`)
            .then(response => {
                setCurrentTodo(response.data)
            })
    }
    return {todos, addTodo, updateTodo, deleteTodo, changeMode, mode, currentTodo}
}
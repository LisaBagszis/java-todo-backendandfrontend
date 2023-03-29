import {FormEvent, useState} from "react";
import {NewTodo} from "./ToDo";
import {Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";

type AddTodoProps = {
    addTodo: (newTodo: NewTodo) => void
}

export default function AddTodo(props: AddTodoProps) {

    const [description, setDescription] = useState<string>('')
    const navigate = useNavigate()


    function onSaveTodo(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const newTodo: NewTodo = {description: description, status: 'OPEN'}
        props.addTodo(newTodo)
        navigate('/todos')

    }


    return (
        <div className = "addTodo">
            <form onSubmit={onSaveTodo}>
            <TextField id="standard-basic" label="new Todo" variant="standard" value={description} onChange={(event) => {
                setDescription(event.target.value)}}/>
            <Button type='submit' variant = "contained" color = "success">Save</Button>
            </form>
            </div>
            )
            }
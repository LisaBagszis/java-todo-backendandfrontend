import {ToDo} from "./ToDo";
import {Button, Card, Typography} from "@mui/material";
import {Link} from "react-router-dom";

type TodoCardProps = {
    todo : ToDo,
    updateTodo : (todo : ToDo) => void,
    deleteTodo: (id: string) => void,
    changeMode: (newMode: string, id?: string, todo?: ToDo) => void

}

export default function TodoCard(props: TodoCardProps) {
    const nextStatus : {OPEN: "IN_PROGRESS", IN_PROGRESS: "DONE", DONE: "DONE"} = {
        "OPEN": "IN_PROGRESS",
        "IN_PROGRESS": "DONE",
        "DONE": "DONE",
    }

    function onAdvanceClick() {
        const todoToUpdate: ToDo = {...props.todo, status: nextStatus[props.todo.status]}

        props.updateTodo(todoToUpdate)
    }

    function onDeleteClick() {
        props.deleteTodo(props.todo.id)
    }

    return (
        <Card variant="outlined" className="todoCard">
            <Typography variant="subtitle1" color="white"> {props.todo.description}</Typography>
            {props.todo.status !== 'DONE' && <Button variant="outlined" color="secondary" onClick={onAdvanceClick}>Advance</Button>}
            {props.todo.status == 'DONE' && <Button variant="outlined" color="secondary" onClick={onDeleteClick}>Delete</Button>}
            <Link to = 'todos/edit'></Link>
        </Card>
    )
}
import "./TodoCard.css"
import {Todo} from "./Todo";

type Props = {
    todo: Todo,
    updateTodo: (todo: Todo) => void
}

export default function TodoCard(props: Props) {

    const nextTodoStatus: {
        OPEN: "IN_PROGRESS", IN_PROGRESS: "DONE",
        DONE: "OPEN"
    } = {
        OPEN: "IN_PROGRESS",
        IN_PROGRESS: "DONE",
        DONE: "OPEN"
    }

    function onAdvanceClick() {
        const updatedTodo: Todo = {...props.todo, status: nextTodoStatus[props.todo.status]}
        props.updateTodo(updatedTodo)
    }

    return <div className="todo-card">
        <h5>{props.todo.description}</h5>
        <p>{props.todo.status}</p>
        <p>{props.todo.id}</p>
        {props.todo.status !== "DONE" && <button onClick={onAdvanceClick}>Advance</button>}

    </div>
}
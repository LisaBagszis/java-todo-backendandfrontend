import {ToDo} from "./ToDo";

type TodoCardProps = {
    todo : ToDo,
    updateTodo : (todo : ToDo) => void,
    deleteTodo: (id: string) => void

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
        <div className='todo-card'>
            <p> {props.todo.description}</p>
            {props.todo.status !== 'DONE' && <button onClick={onAdvanceClick}>Advance</button>}
            {props.todo.status == 'DONE' && <button onClick={onDeleteClick}>Delete</button>}
        </div>
    )
}
import {useState} from "react";
import {NewTodo} from "./ToDo";

type AddTodoProps = {
    addTodo: (newTodo: NewTodo) => void
}

export default function AddTodo(props: AddTodoProps) {

    const [description, setDescription] = useState<string>('')

    function onSaveTodo() {
        const newTodo: NewTodo = {description: description, status: 'OPEN'}
        props.addTodo(newTodo)
    }

    return (
        <div>
            <input value={description} onChange={(event) => {
                setDescription(event.target.value)
            }}/>
            <button onClick={onSaveTodo}>Save</button>

            </div>
            )
            }
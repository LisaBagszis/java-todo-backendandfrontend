import {ChangeEvent, useState} from "react";
import {NewTodo} from "./Todo";

type Props = {
    onAdd: (todo: NewTodo) => Promise<void>
}

export default function AddTodo(props: Props) {

    const [description, setDescription] = useState<string>("")

    function onChange(event: ChangeEvent<HTMLInputElement>) {
        setDescription(event.target.value)
    }

    function onSave() {
        const newTodo: NewTodo = {description, status: "OPEN"}
        props.onAdd(newTodo)
            .then(r => setDescription(""))
    }

    return <div>
        <input value={description} onChange={onChange} placeholder="new ToDo"/>
        <button onClick={onSave}>Save</button>
    </div>
}
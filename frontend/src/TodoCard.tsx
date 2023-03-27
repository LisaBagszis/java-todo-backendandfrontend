import {ToDo} from "./ToDo";

type TodoCardProps = {
    todo : ToDo,

}

export default function TodoCard(props: TodoCardProps) {
    const nextStatus : {OPEN: "IN_PROGRESS", IN_PROGRESS: "DONE", DONE: "DONE"} = {
        "OPEN": "IN_PROGRESS",
        "IN_PROGRESS": "DONE",
        "DONE": "DONE",
    }

    return (
        <div className={}
    )
}#
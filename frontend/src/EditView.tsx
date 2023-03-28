import {ToDo} from "./ToDo";
import {useContext, useState} from "react";
import {Button} from "@mui/material";


type EditViewProps = {
    todo: ToDo,
    updateTodo: (todo : ToDo) => void,
    changeMode : (newMode: string, id?: string, todo?: ToDo) => void
}

export default function EditView(props: EditViewProps) {

    const [updatedTodo, setUpdatedTodo] = useState<ToDo>(props.todo)

    function convertStatus (currentStatus : string):("OPEN" | "IN_PROGRESS" | "DONE") {
        if (currentStatus === "OPEN" ) return "OPEN"
        else if (currentStatus === "IN_PROGRESS" ) return "IN_PROGRESS"
        else return "DONE"
    }


    return (
        <div className={"EditView"}>
            <div className={"EditField"}>
                <label htmlFor={"idEdit"}>ID: </label>
                <p id={"idEdit"}>{updatedTodo.id}</p>
            </div>
            <div className={"EditField"}>
                <label htmlFor={"descriptionEdit"}>Description: </label>
                <input id={"descriptionEdit"} type={"text"} value={updatedTodo.description} onChange={event => setUpdatedTodo({...updatedTodo, description: event.target.value})}/>
            </div>
            <div className={"EditField"}>
                <label htmlFor={"statusEdit"}>Status: </label>
                <select id={"statusEdit"} defaultValue={updatedTodo.status} onChange={event => setUpdatedTodo({...updatedTodo, status: convertStatus(event.target.value)})}>
                    <option value={"OPEN"}>Open</option>
                    <option value={"IN_PROGRESS"}>In Progress</option>
                    <option value={"DONE"}>Done</option>
                </select>
            </div>
            <Button variant="contained" color="secondary" type={"button"} onClick={() => {props.updateTodo(updatedTodo); props.changeMode("overview", "" , updatedTodo)}}>Save</Button>
        </div>
    )
}
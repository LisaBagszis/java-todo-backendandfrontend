import "./TodoBoard.css"
import {Todo} from "./Todo";
import TodoCard from "./TodoCard";

type Props = {
    todos: Todo[],
    title: string,

    updateTodo: (todo: Todo) => void,

}

export default function TodoBoard(props: Props) {

    return <div className="todo-board">
        <h2>{props.title}</h2>
        {props.todos.map(todo => <TodoCard key={todo.id} todo={todo} updateTodo={props.updateTodo}/>)}
    </div>
}
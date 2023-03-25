import "./TodoBoards.css"
import {Todo} from "./Todo";
import TodoBoard from "./TodoBoard";

type Props = {
    todos: Todo[],
    updateTodo: (todo: Todo) => void
}

export default function TodoBoards(props: Props) {

    const openTodos = props.todos.filter(todo => todo.status === "OPEN")
    const inProgressTodos = props.todos.filter(todo => todo.status === "IN_PROGRESS")
    const doneTodos = props.todos.filter(todo => todo.status === "DONE")

    return <div className="todo-boards">
        <TodoBoard todos={openTodos} title={"ToDos"} updateTodo={props.updateTodo}/>
        <TodoBoard todos={inProgressTodos} title="Doing" updateTodo={props.updateTodo}/>
        <TodoBoard todos={doneTodos} title={"Done"} updateTodo={props.updateTodo}/>
    </div>
}

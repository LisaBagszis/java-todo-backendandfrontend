import {ToDo} from "./ToDo";
import TodoCard from "./TodoCard";

export type ToDoGalleryProps = {
todos: ToDo[]
}

export default function ToDoGallery(props: ToDoGalleryProps) {
    const openTodos : ToDo[] = props.todos.filter((todo) => todo.status === 'OPEN')
    const inProgressTodos : ToDo[] = props.todos.filter((todo) => todo.status === 'IN_PROGRESS')
    const doneTodos : ToDo[] = props.todos.filter((todo) => todo.status === 'DONE')

    return (
        <div className='todo-gallery'>
            <div className='todo-gallery-column'>
                <h2>Todo</h2>
                {
                    openTodos.map((todo) => <TodoCard key={{todo.id}
                        todo={todo}/>)
                }
            </div>

        </div>
    )
}
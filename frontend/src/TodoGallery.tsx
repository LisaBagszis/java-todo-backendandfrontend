import {ToDo} from "./ToDo";
import TodoCard from "./TodoCard";
import {Typography} from "@mui/material";

export type ToDoGalleryProps = {
    todos: ToDo[],
    updateTodo: (todo: ToDo) => void,
    deleteTodo: (id: string) => void,
    changeMode: (newMode: string, id?: string, todo?: ToDo) => void

}

export default function ToDoGallery(props: ToDoGalleryProps) {
    const openTodos: ToDo[] = props.todos.filter((todo) => todo.status === 'OPEN')
    const inProgressTodos: ToDo[] = props.todos.filter((todo) => todo.status === 'IN_PROGRESS')
    const doneTodos: ToDo[] = props.todos.filter((todo) => todo.status === 'DONE')

    return (
        <div className='todo-gallery'>
            <div className='todo-gallery-column'>
                <Typography variant="h4" color="whitesmoke">Todo</Typography>
                {
                    openTodos.map((todo) => <TodoCard key={todo.id}
                                                      todo={todo}
                                                      updateTodo={props.updateTodo}
                                                      deleteTodo={props.deleteTodo}
                                                      changeMode={props.changeMode}/>)
                }
            </div>
            <div className='todo-gallery-column'>
                <Typography variant="h4" color="whitesmoke">Doing</Typography>
                {
                    inProgressTodos.map((todo) => <TodoCard key={todo.id}
                                                            todo={todo}
                                                            updateTodo={props.updateTodo}
                                                            deleteTodo={props.deleteTodo}
                                                            changeMode={props.changeMode}/>)
                }
            </div>
            <div className='todo-gallery-column'>
                <Typography variant="h4" color="whitesmoke">Done</Typography>
                {
                    doneTodos.map((todo) => <TodoCard key={todo.id}
                                                      todo={todo}
                                                      updateTodo={props.updateTodo}
                                                      deleteTodo={props.deleteTodo}
                                                      changeMode={props.changeMode}/>)
                }
            </div>

        </div>
    )
}
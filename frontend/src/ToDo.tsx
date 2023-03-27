export type ToDo = {
    id: string,

    description: string,

    status: "OPEN" | "IN PROGRESS" | "DONE"
}
export type NewTodo = {
    description: string,
    status: "OPEN"
}

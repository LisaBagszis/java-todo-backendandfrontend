package com.example.backend;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {

    private final TodoRepository todoRepository;
    private final IdService idService;

    public TodoService(TodoRepository todoRepository, IdService idService) {
        this.todoRepository = todoRepository;
        this.idService = idService;
    }

    public List<Todo> getAllTodos() {
        return todoRepository.getAllTodos();
    }

    public Todo addTodo(Todo todo) {
        Todo todoToAdd = new Todo(idService.generateId(), todo.description(), todo.status());
        return todoRepository.addTodo(todoToAdd);
    }
}

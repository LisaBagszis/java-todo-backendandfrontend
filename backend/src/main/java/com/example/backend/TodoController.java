package com.example.backend;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/todo")
public class TodoController {

    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping
    public List<Todo> getAllTodos() {
        return todoService.getAllTodos();
    }

    @PostMapping
    public Todo addTodo(@RequestBody Todo todo) {
        return todoService.addTodo(todo);
    }

    @PutMapping("{id}")
    public Todo putTodo(@PathVariable String id, @RequestBody Todo todo) {
        if (!id.equals(todo.id())) {
            throw new IllegalArgumentException("Id's must match");
        }
        return todoService.updateTodo(todo);
    }

    @GetMapping("{id}")
    public Todo getTodoById(@PathVariable String id) {
        return todoService.getTodoById(id);
    }
}

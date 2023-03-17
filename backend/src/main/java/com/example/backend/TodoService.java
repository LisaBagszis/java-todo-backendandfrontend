package com.example.backend;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

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
        return todoRepository.saveTodo(todoToAdd);
    }

    public Todo updateTodo(Todo todo) {
        return todoRepository.saveTodo(todo);
    }

    public Todo getTodoById(String id) {
        Todo todo = todoRepository.getTodoById(id);

        if (todo == null) {
            throw new NoSuchElementException("Todo with id: " + id + " not found!");
        }
        return todo;
    }

    public void deleteTodo(String id) {
        todoRepository.deleteTodo(id);
    }
}

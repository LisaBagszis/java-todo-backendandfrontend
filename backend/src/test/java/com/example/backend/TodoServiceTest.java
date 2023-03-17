package com.example.backend;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class TodoServiceTest {

    TodoRepository todoRepository = mock(TodoRepository.class);
    IdService idService = mock(IdService.class);
    TodoService todoService = new TodoService(todoRepository, idService);

    @Test
    void getAllTodos() {
        //GIVEN
        Todo todo1 = new Todo("123", "TestDescription", TodoStatus.OPEN);
        List<Todo> todos = List.of(todo1);

        when(todoRepository.getAllTodos()).thenReturn(todos);

        //WHEN
        List<Todo> actual = todoService.getAllTodos();

        //THEN
        List<Todo> expected = List.of(new Todo("123", "TestDescription", TodoStatus.OPEN));
        verify(todoRepository).getAllTodos();
        assertEquals(expected, actual);
    }

    @Test
    void addTodo() {
        //GIVEN
        Todo todo = new Todo(null, "TestDescription", TodoStatus.OPEN);
        Todo todoToAdd = new Todo("123", "TestDescription", TodoStatus.OPEN);

        when(idService.generateId()).thenReturn("123");
        when(todoRepository.addTodo(todoToAdd)).thenReturn(todoToAdd);

        //WHEN
        Todo actual = todoService.addTodo(todo);

        //THEN
        Todo expected = new Todo("123", "TestDescription", TodoStatus.OPEN);
        verify(idService).generateId();
        verify(todoRepository).addTodo(todoToAdd);
        assertEquals(expected, actual);
    }
}

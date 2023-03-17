package com.example.backend;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class TodoServiceTest {

    TodoRepository todoRepository = mock(TodoRepository.class);
    TodoService todoService = new TodoService(todoRepository);

    @Test
    void getAllTodos() {
        //GIVEN
        Todo todo1 = new Todo();
        List<Todo> todos = List.of(todo1);

        when(todoRepository.getAllTodos()).thenReturn(todos);

        //WHEN
        List<Todo> actual = todoService.getAllTodos();

        //THEN
        List<Todo> expected = List.of(new Todo());
        assertEquals(expected, actual);
    }
}

package com.example.backend;

import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.NoSuchElementException;

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
        when(todoRepository.saveTodo(todoToAdd)).thenReturn(todoToAdd);

        //WHEN
        Todo actual = todoService.addTodo(todo);

        //THEN
        Todo expected = new Todo("123", "TestDescription", TodoStatus.OPEN);
        verify(idService).generateId();
        verify(todoRepository).saveTodo(todoToAdd);
        assertEquals(expected, actual);
    }

    @Test
    void getTodoById() {
        //GIVEN
        Todo todo = new Todo("123", "TestDescription", TodoStatus.OPEN);

        when(todoRepository.getTodoById("123")).thenReturn(todo);

        //WHEN
        Todo actual = todoService.getTodoById("123");

        //THEN
        Todo expected = new Todo("123", "TestDescription", TodoStatus.OPEN);
        verify(todoRepository).getTodoById("123");
        assertEquals(expected, actual);
    }

    @Test
    void getTodoById_whenTodoDoesNotExist_throwException() {
        //GIVEN
        when(todoRepository.getTodoById("123")).thenReturn(null);

        //WHEN
        try {
            todoService.getTodoById("123");

            //THEN
            fail();
        } catch (NoSuchElementException ignored) {
        }

        verify(todoRepository).getTodoById("123");
    }


    @Test
    void updateTodo() {
        //GIVEN
        Todo todo = new Todo("123", "test", TodoStatus.OPEN);

        when(todoRepository.saveTodo(todo)).thenReturn(todo);

        //WHEN

        Todo actual = todoService.updateTodo(todo);

        //THEN
        Todo expected = new Todo("123", "test", TodoStatus.OPEN);
        verify(todoRepository).saveTodo(todo);
        assertEquals(expected, actual);
    }

    @Test
    void deleteTodo() {
        //GIVEN
        Todo todo = new Todo("123", "test", TodoStatus.OPEN);

        //WHEN

        todoService.deleteTodo("123");

        //THEN
        verify(todoRepository).deleteTodo("123");
    }
}

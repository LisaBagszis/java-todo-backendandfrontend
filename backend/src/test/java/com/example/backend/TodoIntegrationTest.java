package com.example.backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class TodoIntegrationTest {

    @Autowired
    MockMvc mockMvc;

    @Test
    void getAllTodos() throws Exception {
        mockMvc.perform(get("/api/todo"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        []
                        """));
    }

    @Test
    void addTodo() throws Exception {
        mockMvc.perform(post("/api/todo")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                        {
                            "description": "TestDescription",
                            "status": "OPEN"
                        }
                        """))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").isNotEmpty())
                .andExpect(content().json("""
                        {
                            "description": "TestDescription",
                            "status": "OPEN"
                        }
                        """));
    }
}

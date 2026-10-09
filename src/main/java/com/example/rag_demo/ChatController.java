package com.example.rag_demo;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.web.bind.annotation.*;

@RestController

public class ChatController {

    private final ChatClient chatClient;

    public ChatController(ChatClient.Builder chatClientBuilder) {
        this.chatClient = chatClientBuilder.build();
    }

    @PostMapping("/api/chat")
    public ChatResponse chat(@RequestBody ChatRequest request) {

        String answer = chatClient
                .prompt()
                .user(request.getQuestion())
                .call()
                .content();

        return new ChatResponse(answer);
    }
}